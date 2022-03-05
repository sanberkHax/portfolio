import { motion } from 'framer-motion';

const Button = ({ href, className, text, onClick }) => {
  const clickHandler = (e) => {
    onClick(e);
  };
  return (
    <>
      {href ? (
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 30, duration: 1 }}
          viewport={{ once: true }}
          className={className}
          href={href}
        >
          {text}
        </motion.a>
      ) : (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 30, duration: 1 }}
          viewport={{ once: true }}
          className={className}
          onClick={clickHandler}
        >
          {text}
        </motion.button>
      )}
    </>
  );
};

export default Button;
