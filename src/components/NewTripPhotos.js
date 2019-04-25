import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'react-native-snap-carousel';
const { width: viewportWidth} = Dimensions.get('window');
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const sliderWidth = viewportWidth;
class NewTripPhotos extends Component {
    state = {}
    _renderItem ({item, index}) {
        return (
                <Image style={styles.imageContainer}
                    source={{uri: item}} resizeMode="cover"/>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.photos.length > 1
                    ?
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.photos}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={sliderWidth}
                        onSnapToItem={index => this.props.storeIndex(index)}
                    />
                    :
                    <Text style={styles.text}>Enter destination name then swipe to choose photo</Text>
                }

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 5,
        marginBottom: 15,
        height: 200,
        borderWidth: 1,
        borderColor:'rgba(65, 75, 107, 0.4)',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 16,
        color: '#414b6b',
        textAlign: 'center'
    },
    imageContainer: {
        width: '100%',
        height: '100%'
    }
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
function mapStateToProps(state) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTripPhotos);