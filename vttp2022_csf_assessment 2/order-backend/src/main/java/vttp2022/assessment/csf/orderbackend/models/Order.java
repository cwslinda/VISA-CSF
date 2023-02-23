package vttp2022.assessment.csf.orderbackend.models;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

import org.bson.Document;

// IMPORTANT: You can add to this class, but you cannot delete its original content

public class Order {

	private String orderId;
	private String name;
	private String email;
	private Integer size;
	private String sauce;
	private Boolean thickCrust;
	private List<String> toppings = new LinkedList<>();
	private String comments;

	public void setOrderId(String orderId) { this.orderId = orderId; }
	public String getOrderId() { return this.orderId; }

	public void setName(String name) { this.name = name; }
	public String getName() { return this.name; }

	public void setEmail(String email) { this.email = email; }
	public String getEmail() { return this.email; }

	public void setSize(Integer size) { this.size = size; }
	public Integer getSize() { return this.size; }

	public void setSauce(String sauce) { this.sauce = sauce; }
	public String getSauce() { return this.sauce; }

	public void setThickCrust(Boolean thickCrust) { this.thickCrust = thickCrust; }
	public Boolean isThickCrust() { return this.thickCrust; }

	public void setToppings(List<String> toppings) { this.toppings = toppings; }
	public List<String> getToppings() { return this.toppings; }
	public void addTopping(String topping) { this.toppings.add(topping); }

	public void setComments(String comments) { this.comments = comments; }
	public String getComments() { return this.comments; }


	public Document toDocument(){

		Document d = new Document();
		d.append("orderId", UUID.randomUUID().toString().substring(0,8));
		d.append("name", getName());
		d.append("email", getEmail());
		d.append("size", getSize());
		d.append("sauce", getSauce());
		d.append("isThickCrust", isThickCrust());
		d.append("toppings", String.join(",", getToppings()));
		d.append("comments", getComments());

		return d;
		
	}

	public static Order create(Document d){
		Order o = new Order();
		o.orderId = d.getString("orderId");
		o.name = d.getString("name");
		o.email = d.getString("email");
		o.size = d.getInteger("size");
		o.sauce = d.getString("sauce");
		o.thickCrust = d.getBoolean("isThickCrust");
		String toppingString = d.getString("toppings");
		o.toppings = Arrays.asList(toppingString.split(","));
		o.comments = d.getString("comments");

		return o;

	}
}
