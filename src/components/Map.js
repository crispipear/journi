import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Map extends Component {
    state = {}
    render() {
        return (
            <View>
                <Text>Map</Text>
            </View>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
function mapStateToProps(state) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);