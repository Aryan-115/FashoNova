import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 120 }
  })
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, type: 'spring', stiffness: 120 } }
};


const recommendations = {
  casual: {
    male: [
      { outfit: "Slim-fit jeans with a crew neck t-shirt", colors: "Light blue & white" },
      { outfit: "Casual sneakers and a denim jacket", colors: "White & faded denim" },
      { outfit: "Chino shorts with a polo shirt", colors: "Khaki & navy" }
    ],
    female: [
      { outfit: "High-waisted jeans with a relaxed tee", colors: "Light wash & pastel" },
      { outfit: "Casual dress with white sneakers", colors: "Floral print & white" },
      { outfit: "Denim skirt and a crop top", colors: "Blue & soft pink" }
    ]
  },
  formal: {
    male: [
      { outfit: "Tailored suit with a crisp white shirt", colors: "Charcoal & white" },
      { outfit: "Oxford shoes and a silk tie", colors: "Black & burgundy" },
      { outfit: "Blazer with dress pants", colors: "Navy & grey" }
    ],
    female: [
      { outfit: "Elegant sheath dress and heels", colors: "Emerald green & nude" },
      { outfit: "Blouse with tailored trousers", colors: "Ivory & black" },
      { outfit: "Blazer over a midi dress", colors: "Blush & cream" }
    ]
  },
  streetwear: {
    male: [
      { outfit: "Oversized hoodie with joggers", colors: "Grey & black" },
      { outfit: "Chunky sneakers and a snapback", colors: "White & neon" },
      { outfit: "Graphic tee and cargo pants", colors: "Black & olive" }
    ],
    female: [
      { outfit: "Baggy jeans with a crop hoodie", colors: "Light blue & lavender" },
      { outfit: "Chunky sneakers and a bucket hat", colors: "White & pastel" },
      { outfit: "Graphic tee and biker shorts", colors: "Black & hot pink" }
    ]
  },
  bohemian: {
    male: [
      { outfit: "Loose linen shirt and drawstring pants", colors: "Beige & cream" },
      { outfit: "Beaded bracelets and sandals", colors: "Earth tones" },
      { outfit: "Patterned short-sleeve shirt", colors: "Rust & teal" }
    ],
    female: [
      { outfit: "Flowy maxi dress and sandals", colors: "Mustard & white" },
      { outfit: "Fringe bag and layered necklaces", colors: "Tan & gold" },
      { outfit: "Boho blouse with wide-leg pants", colors: "Terracotta & ivory" }
    ]
  },
  minimalist: {
    male: [
      { outfit: "Monochrome t-shirt and slim chinos", colors: "All black" },
      { outfit: "White sneakers and a simple watch", colors: "White & silver" },
      { outfit: "Neutral crewneck sweater", colors: "Beige" }
    ],
    female: [
      { outfit: "Neutral-toned blouse and tailored pants", colors: "Taupe & cream" },
      { outfit: "Simple slip dress and flats", colors: "Black & nude" },
      { outfit: "Minimalist turtleneck and skirt", colors: "Grey & white" }
    ]
  },
  vintage: {
    male: [
      { outfit: "Retro print shirt and corduroy pants", colors: "Brown & mustard" },
      { outfit: "Vintage sneakers and round sunglasses", colors: "Off-white & gold" },
      { outfit: "Denim jacket with rolled-up jeans", colors: "Classic blue" }
    ],
    female: [
      { outfit: "Polka dot dress and cat-eye sunglasses", colors: "Red & white" },
      { outfit: "High-waisted mom jeans and a tucked tee", colors: "Light blue & yellow" },
      { outfit: "Vintage cardigan and pleated skirt", colors: "Mint & cream" }
    ]
  }
};

const ChooseStyle = () => {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const styles = [
    { id: 'casual', name: 'Casual', emoji: '👕' },
    { id: 'formal', name: 'Formal', emoji: '🤵' },
    { id: 'streetwear', name: 'Streetwear', emoji: '🧢' },
    { id: 'bohemian', name: 'Bohemian', emoji: '🌸' },
    { id: 'minimalist', name: 'Minimalist', emoji: '⚪' },
    { id: 'vintage', name: 'Vintage', emoji: '📻' },
  ];

  const occasions = [
    { id: 'work', name: 'Work', emoji: '💼' },
    { id: 'party', name: 'Party', emoji: '🎉' },
    { id: 'date', name: 'Date Night', emoji: '💕' },
    { id: 'travel', name: 'Travel', emoji: '✈️' },
    { id: 'gym', name: 'Gym', emoji: '🏋️' },
    { id: 'weekend', name: 'Weekend', emoji: '🏖️' },
  ];

  const handleRecommendation = () => {
    setShowRecommendations(true);
  };

  return (
    <section id="choose" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-[90vh]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow">
            Choose Your Style
          </h2>
          <p className="text-xl text-muted-foreground">
            Help us curate the perfect recommendations for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-700">Your Style Preference</h3>
            <div className="grid grid-cols-2 gap-4">
              {styles.map((style, i) => (
                <motion.div
                  key={style.id}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <Card
                    className={`p-6 cursor-pointer rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                      selectedStyle === style.id
                        ? 'ring-4 ring-purple-400 bg-purple-50'
                        : 'hover:bg-purple-100/40'
                    }`}
                    onClick={() => {
                      setSelectedStyle(style.id);
                      setShowRecommendations(false);
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">{style.emoji}</div>
                      <div className="font-semibold text-lg">{style.name}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-600">Shopping Occasion</h3>
            <div className="grid grid-cols-2 gap-4">
              {occasions.map((occasion, i) => (
                <motion.div
                  key={occasion.id}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <Card
                    className={`p-6 cursor-pointer rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                      selectedOccasion === occasion.id
                        ? 'ring-4 ring-pink-400 bg-pink-50'
                        : 'hover:bg-pink-100/40'
                    }`}
                    onClick={() => {
                      setSelectedOccasion(occasion.id);
                      setShowRecommendations(false);
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">{occasion.emoji}</div>
                      <div className="font-semibold text-lg">{occasion.name}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Button
              size="lg" 
              className="px-12 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 text-lg font-bold shadow-lg"
              disabled={!selectedStyle || !selectedOccasion}
              onClick={handleRecommendation}
            >
              Get My Recommendations
            </Button>
          </motion.div>
        </div>

        {showRecommendations && selectedStyle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-700 drop-shadow">Recommendations</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-pink-400">
                <h4 className="text-2xl font-semibold mb-4 text-pink-600 flex items-center gap-2">
                  <span>👩</span> For Women
                </h4>
                <ul className="space-y-4">
                  {recommendations[selectedStyle]?.female.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="inline-block w-3 h-3 mt-2 rounded-full bg-pink-400"></span>
                      <div>
                        <span className="font-medium">{rec.outfit}</span>
                        <div className="text-xs text-gray-500 mt-1">
                          <span className="inline-block px-2 py-0.5 rounded bg-pink-100 text-pink-700 font-semibold">
                            {rec.colors}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-purple-400">
                <h4 className="text-2xl font-semibold mb-4 text-purple-600 flex items-center gap-2">
                  <span>👨</span> For Men
                </h4>
                <ul className="space-y-4">
                  {recommendations[selectedStyle]?.male.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="inline-block w-3 h-3 mt-2 rounded-full bg-purple-400"></span>
                      <div>
                        <span className="font-medium">{rec.outfit}</span>
                        <div className="text-xs text-gray-500 mt-1">
                          <span className="inline-block px-2 py-0.5 rounded bg-purple-100 text-purple-700 font-semibold">
                            {rec.colors}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ChooseStyle;