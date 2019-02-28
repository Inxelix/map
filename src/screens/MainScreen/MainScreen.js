import React from 'react';
import { SafeAreaView, Animated, View, Text, ActivityIndicator } from 'react-native';
import Modal from "react-native-modal";
import {
  scale,
} from 'react-native-size-matters';
import { MapView, Permissions, Location } from 'expo';

import { ContentWrapper } from '../../components';
import { Header } from '../../containers';
import { colors } from '../../constants';
import { CustomCalloutWrapper } from './components';
import { 
  AddMarkerButton,
  CustomModal,
  CustomModalInput,
 } from './containers';


type Props = {};

export default class MainScreen extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      saveMarker: false,
      isHidden: false,
      modalIsVisible: false,
      marker: {
        location: {
          latitude: null,
          longitude: null,
        },
        type: '',
        description: '',
      },
      fieldText: '',
      loading: true,
      coords: null,
      errorMessage: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {markers} = this.state;
    if (nextProps.fetching) {
      return;
    };

    if (nextProps.error) {
      alert('Ошибка');
    };

    if (nextProps.markers && nextProps.status === 'got') {
      this.setState({
        markers: nextProps.markers,
      });
    };
  };

  componentDidMount() {
    const { getMarker } = this.props;
    this._getLocationAsync();
    getMarker();
  };

   _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Нет разрешения');
    };
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ coords: location, loading: false });
  };

  onSavePress = (text, type) => {
    const {
      markers,
      description,
      marker,
    } = this.state;
    const { addMarker } = this.props;

    addMarker(marker.location, text, type);
    this.setState({
      markers: [
        ...markers,
        {
          ...marker,
          description: text,
          type: type,
        },
      ],
      modalIsVisible: false,
      isHidden: false,
    });
    
  };

  onMarkerTextChange = (text) => {
    const { fieldText } = this.state;
    this.setState({
      fieldText: text,
    });
  };

  onCancelPress = () => {
    this.setState ({
      modalIsVisible: false,
      isHidden: false,
    });
  };

  onPress(data) {
    const { saveMarker } = this.state;
    if (saveMarker) {
      const {
        marker,
      } = this.state;

      this.setState({
        marker: {
          ...marker,
          location: {
            latitude: data.nativeEvent.coordinate.latitude,
            longitude: data.nativeEvent.coordinate.longitude,
          },
        },
        modalIsVisible: true,
        saveMarker: false,
      });
    }
  };

  onButtonPress = () => {
    this.setState({
      saveMarker: true,
      isHidden: true,
    });
  };

  render() {
    const { 
      markers,
      isHidden,
      modalIsVisible,
      coords,
      isPicked,
      loading,
    } = this.state;

    return loading ? (<ContentWrapper />) : (
      <ContentWrapper>
        <Header />
        <Modal
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          isVisible={modalIsVisible}
          onBackdropPress={this.onCancelPress}
        >
          <CustomModal
            onSavePress={this.onSavePress}
            onCancelPress={this.onCancelPress}
            onChange={this.onMarkerTextChange}
          />
        </Modal>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: coords.coords.latitude,
              longitude: coords.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation
            onPress={this.onPress.bind(this)}
          >
            {
              markers.map((marker, index) => 
                { console.log(marker);
                  return (
                  <MapView.Marker
                    pinColor={colors.primaryColor}
                    coordinate={marker.location}
                    key={index}
                  >
                    <MapView.Callout>
                      <CustomCalloutWrapper>
                        <Text>
                          {marker.description ? marker.description : 'здесь пустенько'}
                        </Text>
                        <Text>
                          {marker.type}
                        </Text>
                      </CustomCalloutWrapper>
                    </MapView.Callout>
                  </MapView.Marker>
                )
              }
              )
            }
          </MapView>
          <View
            style={{
              position: 'absolute',
              top: '90%',
              alignSelf: 'center'
            }}
          >
            <AddMarkerButton 
              onButtonPress={this.onButtonPress}
              hide={isHidden}
            />
          </View>
      </ContentWrapper>
    );
  }
}

MainScreen.navigationOptions = {
  header: null,
}; 