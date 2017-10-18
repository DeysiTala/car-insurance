import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';
import './Map.css';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'


const Map = ({ model,info }) => {

  const state = {
    properties: model.properties,
    activeProperty: model.activeProperty,
    filterIsVisible: false,
    filteredProperties: [],
    isFiltering: false,
    isRouting: model.isRouting
  };
  const {
		properties,
    activeProperty,
    filterIsVisible,
    filteredProperties,
    isFiltering,
    isRouting
	} = state;
  const propertiesList = isFiltering ? filteredProperties : properties;

  const setActiveProperty = (property, scroll) => {
    //this.setState({
    //	activeProperty: property,
    //});
    model.setActiveProperty(property);

    const { index } = property;

    // Scroll to active property
    if (scroll) {
      const target = `#card-${index}`;
      //jump(target, {
      //	duration: 800,
      //	easing: easeInOutCubic,
      //});
    }
  }


  const onPathBntClick = () => {
    model.setIsRouting();
  }

  return (<div>

    <HeaderMap />

    <GoogleMaps
      model={model}
      info ={info}
      properties={properties}
      activeProperty={activeProperty}
      setActiveProperty={setActiveProperty}
      filteredProperties={filteredProperties}
      isFiltering={isFiltering}
      isRouting={isRouting}
    />
    <ButtonLocation/>


  </div>);
}

const HeaderMap = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-xs-1 text-center">
            <a href="javascript:window.history.back();">
              <i
                className="fa fa-chevron-left arrow"
                aria-hidden="true" />
            </a>
          </div>
          <div className="col-md-10 col-xs-10 text-center">
            <h2 className="titleLocation">Mi Ubicación</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

const ButtonLocation = () => {
  return (
    <div className="container botones text-center">
      <div className="row">
        <div className="col-md-12 col-xs-12">
            <NavLink to={'/damage'} className="btn Homebtn">
              Siguiente
              </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Map;