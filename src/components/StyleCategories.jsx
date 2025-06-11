import React from 'react';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';

const StyleCategories = () => {
  const categories = [
    {
      title: 'Trending Now',
      image: 'category1.jpg',
      description: 'Latest fashion trends and seasonal must-haves',
      color: 'from-pink-500 to-rose-500',
      link: '/category/trending'
    },
    {
      title: 'Work Essentials',
      image: 'category2.jpg',
      description: 'Professional outfits for every workplace',
      color: 'from-blue-500 to-indigo-500',
      link: '/category/work'
    },
    {
      title: 'Weekend Vibes',
      image: 'category3.jpg',
      description: 'Casual and comfortable weekend looks',
      color: 'from-green-500 to-teal-500',
      link: '/category/weekend'
    },
    {
      title: 'Special Occasions',
      image: 'category4.jpg',
      description: 'Elegant outfits for memorable moments',
      color: 'from-purple-500 to-violet-500',
      link: '/category/special'
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recommendations by Category</h2>
          <p className="text-xl text-muted-foreground">
            Discover curated collections for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="block group">
              <Card
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-75 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleCategories;