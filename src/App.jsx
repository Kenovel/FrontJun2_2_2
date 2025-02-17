import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

function App() {
    const [steps] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const isFirstStep = activeIndex === 0;
    const isLastStep = activeIndex === steps.length - 1;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {' '}
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles['steps-content']}>
                        {/* Для получения активного контента использйте steps и activeIndex */}
                        {steps[activeIndex].content}
                    </div>
                    <ul className={styles['steps-list']}>
                        {steps.map((step, index) => (
                            <li
                                key={step.id}
                                className={
                                    styles['steps-item'] +
                                    (index === activeIndex ? ` ${styles.active}` : '') +
                                    (index < activeIndex ? ` ${styles.done}` : '')
                                }
                            >
                                <button
                                    className={styles['steps-item-button']}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {index + 1}
                                </button>
                                {step.title}
                            </li>
                        ))}
                    </ul>
                    <div className={styles['buttons-container']}>
                        <button
                            className={styles.button}
                            onClick={() => setActiveIndex(activeIndex - 1)}
                            disabled={isFirstStep}
                        >
                            Назад
                        </button>
                        <button
                            className={styles.button}
                            onClick={() => setActiveIndex(activeIndex + 1)}
                            disabled={isLastStep}
                        >
                            Далее
                        </button>
                        {/* Мы ведь можем захотеть начать сначала не только в конце! */}
                        <button
                            className={styles.button}
                            onClick={() => setActiveIndex(0)}
                            disabled={isFirstStep}
                        >
                            Начать сначала
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
