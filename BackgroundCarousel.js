import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';


const DEVICE_WIDTH = Dimensions.get("window").width;

export default class BackgroundCarousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({ selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1 }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: DEVICE_WIDTH * this.state.selectedIndex
                    })
                })
        }, 3000)
    }
    setSelectedIndex = event => {
        //width of the view szie
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        //get current position of the view
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({ selectedIndex });
    }

    render() {
        const { images } = this.props;
        const { selectedIndex } = this.state;
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <ScrollView horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex} ref={this.scrollRef}>
                    {
                        images.map(image => (
                            <Image
                                key={image}
                                source={{ uri: image }}
                                style={styles.backgroundImage}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.bottomContainer}>
                    <View style={styles.circleDiv}>
                        {
                            images.map((image, index) => (
                                <View>
                                    <View
                                        key={image}
                                        style={[
                                            styles.whiteCircle,
                                            { opacity: index === selectedIndex ? 1 : 0.5 }
                                        ]}

                                    />
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.bottomlineView}>
                        <View style={styles.bottomLine}>

                        </View>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        width: DEVICE_WIDTH
    },
    circleDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteCircle: {
        height: 6,
        width: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: '#fff'
    },
    bottomlineView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },
    bottomLine: {
        width: 60,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 4
    },
    bottomContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 50,
        height: 10,
    }
})