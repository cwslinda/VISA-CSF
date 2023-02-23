package vttp2022.assessment.csf.orderbackend.services;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp2022.assessment.csf.orderbackend.models.Order;
import vttp2022.assessment.csf.orderbackend.models.OrderSummary;
import vttp2022.assessment.csf.orderbackend.repositories.PizzaRepo;

@Service
public class OrderService {

	@Autowired
	private PricingService priceSvc;

	@Autowired 
	private PizzaRepo repo;

	// POST /api/order
	// Create a new order by inserting into orders table in pizzafactory database
	// IMPORTANT: Do not change the method's signature
	public void createOrder(Order order) {
		repo.createOrder(order);

	}

	// GET /api/order/<email>/all
	// Get a list of orders for email from orders table in pizzafactory database
	// IMPORTANT: Do not change the method's signature
	public List<OrderSummary> getOrdersByEmail(String email) {
		// Use priceSvc to calculate the total cost of an order

		List<Order> results = repo.getOrders(email);

		List<OrderSummary> summaries = new LinkedList<>();

		for(Order o : results){

			float cost = 0f;

			cost += priceSvc.size(o.getSize()) + (o.isThickCrust() ? priceSvc.thickCrust() : priceSvc.thickCrust()) 
									+ priceSvc.sauce(o.getSauce());
			for (String t : o.getToppings()) {
				cost += priceSvc.topping(t);
			}

			OrderSummary os = new OrderSummary();
			os.setOrderId(o.getOrderId());
			os.setName(o.getName());
			os.setEmail(o.getEmail());
			os.setAmount(cost);

			summaries.add(os);

	

		}
		
		return summaries;
	}
}
