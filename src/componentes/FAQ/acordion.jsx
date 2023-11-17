import { useState } from 'react';
import styles from './acordion.module.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      title: 'How does the free trial work?',
      content: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
    },
    {
      title: 'Do you recommend Pay as you go or Pre pay?',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam id posuere dolor. Vivamus pulvinar purus nec est sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam id posuere dolor. Vivamus pulvinar purus nec est sollicitudin.'
    },
    {
      title: 'What do I get for $0 with my plan?',
      content: 'Duis at tristique metus. Quisque ac aliquet neque, vitae varius lorem. Integer eu eros eu odio elementum lacinia in a neque. Suspendisse potenti. Duis at tristique metus. Quisque ac aliquet neque, vitae varius lorem. Integer eu eros eu odio elementum lacinia in a neque. Suspendisse potenti.'
    }
  ];

  return (
    <div className={styles.accordion}>
      {accordionItems.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div className={styles.accordionTitle} onClick={() => toggleAccordion(index)}>
            {item.title}
            <span>+</span>
          </div>
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
