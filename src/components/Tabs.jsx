import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import './common/Tabs.css';
export default (props) => (
  <Tabs>
    <TabList>
      {props.pokemons.map(({ img, id }) => {
        return (
          <Tab key={id}>
            <img src={img} alt={'name'} />
          </Tab>
        );
      })}
    </TabList>
    {props.pokemons.map(({ name, id, stats }) => {
      return (
        <TabPanel key={id}>
          {name ? (
            <>
              <header className="panel-header">
                <h2>{name}</h2>
                <h2>N.{id}</h2>
              </header>
              <div className="stat-block">
                <h3>stast</h3>
                <p>
                  {stats[0].stat.name}
                  {stats[0].base_stat}
                </p>
                <p>
                  {stats[1].stat.name}
                  {stats[1].base_stat}
                </p>
                <p>
                  {stats[2].stat.name}
                  {stats[2].base_stat}
                </p>
                <p>
                  {stats[3].stat.name}
                  {stats[3].base_stat}
                </p>
                <p>
                  {stats[4].stat.name}
                  {stats[4].base_stat}
                </p>
                <p>
                  {stats[5].stat.name}
                  {stats[5].base_stat}
                </p>
              </div>
            </>
          ) : (
            <></>
          )}
        </TabPanel>
      );
    })}
  </Tabs>
);
