import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import './common/Tabs.css';
import OutlinedCard from './Stat_Block_Component';
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
                <h2>N. {id}</h2>
              </header>
              <OutlinedCard stats={stats} />
            </>
          ) : (

              <></>
            )}
        </TabPanel>
      );
    })}
  </Tabs>
);
