import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        开门见山，直接服务于科研生产。我们的目的是即使一觉醒来什么都不记得了，也能在5分钟内上手。不要为了任何东西牺牲简单性。
      </>
    ),
  },
  {
    title: '好用',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         这就是个为了开发新仿真算法而搭的实验台子。我们实现仿真算法开发最基本的功能。它基于<code>taichi</code>，这是一个直接拷贝代码就能开箱即用的语言。
      </>
    ),
  },
  {
    title: '文档清晰',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        只要写了代码，就必须写文档。文档必须配有小例子。我们期待阅读文档时，就像上了一堂课程一样。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
