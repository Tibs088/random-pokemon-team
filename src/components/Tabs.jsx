import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import './common/Tabs.css';
import StatsCard from './Stat_Block_Component';

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
    {props.pokemons.map(({ name, id, stats, types }) => {
      return (
        <TabPanel key={id}>
          {name ? (
            <>
              <header className="panel-header">
                <h2>{name}</h2>
                <h2>N. {id}</h2>
              </header>
              <p>Types:
                {types[0].type.name}
                {types[1] ? (types[1].type.name) : <></>}
              </p>
              <StatsCard stats={stats} />
            </>
          ) : (

              <></>
            )}
        </TabPanel>
      );
    })}
  </Tabs>
);
