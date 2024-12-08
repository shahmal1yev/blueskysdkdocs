import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    imgSrc: string;
    description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
    {
        title: 'Protocol-Based Interoperability',
        imgSrc: '/img/interoperability.png',
        description: (
            <>
                Built entirely on ATProtocol, the SDK enables seamless interaction with any system implemented at the protocol level.
            </>
        ),
    },
    {
        title: 'Future-Ready Design',
        imgSrc: '/img/startup.png',
        description: (
            <>
                Designed to support upcoming systems built on ATProtocol, ensuring long-term compatibility and scalability.
            </>
        ),
    },
    {
        title: 'Comprehensive Documentation',
        imgSrc: '/img/documents.png',
        description: (
            <>
                Detailed guides, examples, and API references help developers integrate the SDK quickly and effectively.
            </>
        ),
    },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
        <div className="text--center">
            <img src={imgSrc} alt={title} className={styles.featureImage} style={{ padding: '30px' }} />
        </div>
        <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
