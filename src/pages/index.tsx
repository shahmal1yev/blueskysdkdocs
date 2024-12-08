import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <img src="/img/logo.svg" alt={siteConfig.title}/>
            <Heading as="h1" className="hero__title">
                {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro"
                    target="_blank"
                >
                    Getting Started
                </Link>
                <Link
                    className="button button--lg"
                    href="https://github.com/sponsors/shahmal1yev"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} style={{marginRight: '8px'}}/>
                    Sponsor on GitHub
                </Link>
                <Link
                    className="button button--warning button--lg"
                    href="https://www.buymeacoffee.com/shahmal1yev"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faCoffee} style={{marginRight: '8px'}}/>
                    Buy Me A Coffee
                </Link>
            </div>
        </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
