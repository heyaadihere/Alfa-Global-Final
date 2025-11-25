"""
Seed initial data for Alfa Global Group website
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'alfaglobal')]

async def seed_testimonials():
    """Seed initial testimonials"""
    testimonials = [
        {
            "id": "test1",
            "name": "Mark R.",
            "position": "Entrepreneur",
            "content": "Alfa Global transformed my financial future! Their expert guidance helped me grow my investments and plan for retirement with confidence.",
            "rating": 5,
            "active": True,
            "createdAt": datetime.utcnow()
        },
        {
            "id": "test2",
            "name": "Jessica M.",
            "position": "Business Executive",
            "content": "The team at Alfa Global is top-notch. Their personalized approach to wealth management gave me peace of mind knowing my finances are in good hands.",
            "rating": 5,
            "active": True,
            "createdAt": datetime.utcnow()
        },
        {
            "id": "test3",
            "name": "Sarah T.",
            "position": "Physician",
            "content": "Trust, transparency, and results—that's what Alfa Global delivers. Their expertise helped me optimize my portfolio and secure my family's financial future.",
            "rating": 5,
            "active": True,
            "createdAt": datetime.utcnow()
        }
    ]
    
    # Clear existing testimonials
    await db.testimonials.delete_many({})
    
    # Insert new testimonials
    await db.testimonials.insert_many(testimonials)
    print(f"✅ Seeded {len(testimonials)} testimonials")

async def seed_insights():
    """Seed initial insights/blog posts"""
    insights = [
        {
            "id": "insight1",
            "title": "Market Outlook for 2024",
            "excerpt": "Seasoned advisors provide insights into emerging market trends and investment opportunities.",
            "content": "As we navigate through 2024, the financial landscape continues to evolve with new opportunities and challenges. Our expert team analyzes current market trends and provides strategic insights for investors looking to maximize their returns while managing risk effectively.",
            "category": "Market Analysis",
            "readTime": "5 min read",
            "date": datetime(2024, 3, 15),
            "published": True,
            "createdAt": datetime.utcnow()
        },
        {
            "id": "insight2",
            "title": "Strategies for Wealth Preservation",
            "excerpt": "Protecting assets for future generations through diversified investment strategies.",
            "content": "Wealth preservation requires a comprehensive approach that balances growth potential with risk management. Learn about the latest strategies our advisors recommend for protecting and growing your family's assets across generations.",
            "category": "Wealth Management",
            "readTime": "7 min read",
            "date": datetime(2024, 2, 20),
            "published": True,
            "createdAt": datetime.utcnow()
        },
        {
            "id": "insight3",
            "title": "Alternative Investments in 2024",
            "excerpt": "Exploring opportunities beyond traditional markets for sophisticated investors.",
            "content": "Alternative investments continue to gain traction among sophisticated investors seeking diversification and enhanced returns. Discover the latest opportunities in private equity, hedge funds, and other alternative asset classes.",
            "category": "Investment Strategy",
            "readTime": "6 min read",
            "date": datetime(2024, 1, 10),
            "published": True,
            "createdAt": datetime.utcnow()
        }
    ]
    
    # Clear existing insights
    await db.insights.delete_many({})
    
    # Insert new insights
    await db.insights.insert_many(insights)
    print(f"✅ Seeded {len(insights)} insights")

async def main():
    """Main seeding function"""
    print("🌱 Starting data seeding...")
    
    try:
        await seed_testimonials()
        await seed_insights()
        print("\n✅ All data seeded successfully!")
    except Exception as e:
        print(f"\n❌ Error seeding data: {str(e)}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(main())
