package vttp2022.assessment.csf.orderbackend.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;

// IMPORTANT: You can add to this class, but you cannot delete its original content

public class OrderSummary {
	private String orderId;
	private String name;
	private String email;
	private Float amount;

	public void setOrderId(String orderId) { this.orderId = orderId; }
	public String getOrderId() { return this.orderId; }

	public void setName(String name) { this.name = name; }
	public String getName() { return this.name; }

	public void setEmail(String email) { this.email = email; }
	public String getEmail() { return this.email; }

	public void setAmount(Float amount) { this.amount = amount; }
	public Float getAmount() { return this.amount; }


	public JsonObject toJSON(){
		return Json.createObjectBuilder()
				.add("orderId", getOrderId())
				.add("name", getName())
				.add("email", getEmail())
				.add("amount", getAmount())
				.build();

	}

}
