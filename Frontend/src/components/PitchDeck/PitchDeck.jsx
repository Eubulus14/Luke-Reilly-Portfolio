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
        <h2 className="pitch-deck-title">Read the Pitch Deck Below</h2>
      </div>

      <div className="pitch-deck-grid">
        {pitchPhotos.map((photo, index) => (
          <motion.figure
            key={photo.id || index}
            className="pitch-deck-item"
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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