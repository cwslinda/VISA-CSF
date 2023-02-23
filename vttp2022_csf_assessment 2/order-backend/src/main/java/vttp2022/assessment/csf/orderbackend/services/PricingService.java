package vttp2022.assessment.csf.orderbackend.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

// IMPORTANT: Do not modify this file

@Service
public class PricingService {

	// Price for each of the sizes
	private Float[] size = new Float[]{ 11.90f, 24.90f, 32.90f, 40.90f };
	private Map<String, Float> sauces = new HashMap<>();
	private Map<String, Float> toppings = new HashMap<>();

	public PricingService() {

		// One of the following: classic, signature, salsa, smoky, napolitana
		sauces.put("classic", 0.7f);
		sauces.put("salsa", 1.3f);
		sauces.put("smoky", 1.3f);
		sauces.put("napolitana", 1.3f);
		sauces.put("signature", 1.5f);

		// One of the following: chicken, seafood, beef, vegetables, cheese, arugula, pineapple
		toppings.put("chicken", 1f);
		toppings.put("chicken", 1f);
		toppings.put("beef", 2f);
		toppings.put("seafood", 3f);
		toppings.put("vegetables", 1f);
		toppings.put("cheese", 1f);
		toppings.put("arugula", 1.5f);
		toppings.put("pineapple", 0.7f);
	}

	public Float size(Integer size) {
		return this.size[size];
	}

	public Float sauce(String sauceType) {
		return sauces.getOrDefault(sauceType.trim().toLowerCase(), -1000f);
	}

	public Float topping(String toppingType) {
		return toppings.getOrDefault(toppingType.trim().toLowerCase(), -1000f);
	}

	public Float thickCrust() {
		return 1.5f;
	}
	public Float thinCrust() {
		return 1.1f;
	}
}
