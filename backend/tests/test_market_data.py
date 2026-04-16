"""
Test suite for Market Data API endpoint
Tests the live market ticker functionality for Alfa Global Group website
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestMarketDataAPI:
    """Market Data API endpoint tests"""
    
    def test_market_data_endpoint_returns_200(self):
        """Test that /api/market-data returns 200 status"""
        response = requests.get(f"{BASE_URL}/api/market-data", timeout=30)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        print(f"✓ Market data endpoint returned status 200")
    
    def test_market_data_returns_success_true(self):
        """Test that response contains success: true"""
        response = requests.get(f"{BASE_URL}/api/market-data", timeout=30)
        data = response.json()
        assert data.get("success") == True, f"Expected success=True, got {data.get('success')}"
        print(f"✓ Response contains success: true")
    
    def test_market_data_contains_required_keys(self):
        """Test that response data contains all required market indices"""
        response = requests.get(f"{BASE_URL}/api/market-data", timeout=30)
        data = response.json()
        
        required_keys = ["SENSEX", "NIFTY 50", "GOLD (22K)", "USD/INR", "SILVER"]
        market_data = data.get("data", {})
        
        for key in required_keys:
            assert key in market_data, f"Missing required key: {key}"
            print(f"✓ Found required key: {key}")
    
    def test_sensex_value_is_realistic(self):
        """Test that SENSEX value is in realistic range (70000-90000)"""
        response = requests.get(f"{BASE_URL}/api/market-data", timeout=30)
        data = response.json()
        
        sensex_value = data.get("data", {}).get("SENSEX", {}).get("value", "0")
        # Remove commas and convert to float
        sensex_numeric = float(sensex_value.replace(",", ""))
        
        assert 70000 <= sensex_numeric <= 90000, f"SENSEX value {sensex_numeric} not in expected range 70000-90000"
        print(f"✓ SENSEX value {sensex_numeric} is in realistic range")
    
    def test_nifty_value_is_realistic(self):
        """Test that NIFTY 50 value is in realistic range (20000-30000)"""
        response = requests.get(f"{BASE_URL}/api/market-data", timeout=30)
        data = response.json()
        
        nifty_value = data.get("data", {}).get("NIFTY 50", {}).get("value", "0")
        # Remove commas and convert to float
        nifty_numeric = float(nifty_value.replace(",", ""))
        
        assert 20000 <= nifty_numeric <= 30000, f"NIFTY 50 value {nifty_numeric} not in expected range 20000-30000"
        print(f"✓ NIFTY 50 value {nifty_numeric} is in realistic range")
    
    def test_usd_inr_value_is_realistic(self):
        """Test that USD/INR value is in realistic range (85-100)"""
        response = requests.get(f"{BASE_URL}/api/market-data", timeout=30)
        data = response.json()
        
        usd_inr_value = data.get("data", {}).get("USD/INR", {}).get("value", "₹0")
        # Remove ₹ symbol and convert to float
        usd_inr_numeric = float(usd_inr_value.replace("₹", "").replace(",", ""))
        
        assert 85 <= usd_inr_numeric <= 100, f"USD/INR value {usd_inr_numeric} not in expected range 85-100"
        print(f"✓ USD/INR value {usd_inr_numeric} is in realistic range")
    
    def test_market_data_structure(self):
        """Test that each market item has value, change, and up fields"""
        response = requests.get(f"{BASE_URL}/api/market-data", timeout=30)
        data = response.json()
        
        market_data = data.get("data", {})
        
        for key, item in market_data.items():
            assert "value" in item, f"{key} missing 'value' field"
            assert "up" in item, f"{key} missing 'up' field"
            print(f"✓ {key} has correct structure (value, up fields)")
