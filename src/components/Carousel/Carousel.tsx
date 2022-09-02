import React, {useMemo, useRef} from 'react';
import {Animated, Image} from 'react-native';
import {styles} from './styles';

export const Carousel = ({data, itemWidth}: any) => {
  const lastIndex = useMemo(() => data.length - 1, [data]);
  const xScroll = useRef(new Animated.Value(0)).current;

  const spacing = 5;
  const sideCardSpace = 20;

  const cardWidth = useMemo(
    () => itemWidth - spacing - sideCardSpace,
    [itemWidth],
  );

  const keyExtractor = (item: any) => item.id;

  const renderItem = ({item, index}: any) => {
    const marginLeft = index === 0 ? sideCardSpace : spacing;
    const marginRight = index === lastIndex ? sideCardSpace : spacing;

    const scaleY = xScroll.interpolate({
      inputRange: [
        (index - 1) * cardWidth,
        index * cardWidth,
        (index + 1) * cardWidth,
      ],
      outputRange: [0.8, 1, 0.8],
    });

    return (
      <Animated.View
        style={[
          styles.imageContainer,
          {
            width: cardWidth,
            marginLeft,
            marginRight,
            transform: [{scaleY}],
          },
        ]}>
        <Image style={styles.image} source={item.image} />
      </Animated.View>
    );
  };

  return (
    <>
      <Animated.FlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth + sideCardSpace}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        decelerationRate={0.8}
        snapToAlignment={'center'}
        pagingEnabled
        horizontal
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: xScroll}}}],
          {useNativeDriver: true},
        )}
      />
    </>
  );
};
