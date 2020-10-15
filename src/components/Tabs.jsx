import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import './common/Tabs.css';
import StatsCard from './Stat_Block_Component';
import '../styles/types.css'

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
              <h4>Types:</h4>
              <p class={`types ${types[0].type.name}-type`}>
                {types[0].type.name}
              </p>
              {types[1] ?
                <p class={`types ${types[1].type.name}-type`}>
                  {(types[1].type.name)}
                </p> : <></>}
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
