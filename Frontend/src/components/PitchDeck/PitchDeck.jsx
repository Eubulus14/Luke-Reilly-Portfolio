import "./PitchDeck.css";
import { motion } from "framer-motion";

const PitchDeck = ({ pitchPhotos = [], filmTitle = "Film" }) => {
  if (!pitchPhotos || pitchPhotos.length === 0) return null;

  return (
    <motion.section
      className="pitch-deck"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="pitch-deck-header">
        <p className="pitch-deck-kicker">Pitch Deck</p>
        <h2 className="pitch-deck-title">Selected Visual Materials</h2>
      </div>

      <div className="pitch-deck-grid">
        {pitchPhotos.map((photo, index) => (
          <motion.figure
            key={photo.id}
            className={`pitch-deck-item pitch-deck-item-${(index % 11) + 1}`}
            initial={{
              opacity: 0,
              y: 28,
              rotate: index % 2 === 0 ? -1.2 : 1.2,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.65,
              delay: index * 0.045,
              ease: "easeOut",
            }}
          >
            <div className="pitch-deck-imageWrap">
              <img
                src={photo.image}
                alt={photo.alt || `${filmTitle} pitch deck slide ${index + 1}`}
                className="pitch-deck-image"
              />
            </div>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
};

export default PitchDeck;