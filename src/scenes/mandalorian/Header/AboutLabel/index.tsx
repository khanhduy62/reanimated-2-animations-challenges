import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface AboutProps {}

export const AboutLabel: React.FC<AboutProps> = ({}) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <Svg width="139" height="82" viewBox="0 0 139 82" fill="none">
        <Path
          d="M21.4853 81.0606L21.5389 81.5H21.9816H29.26H29.8241L29.7564 80.94L20.0791 0.939955L20.0258 0.5H19.5827H12.277H11.8371L11.7811 0.936292L1.50408 80.9363L1.43166 81.5H2H9.30567H9.74567L9.80161 81.0636L11.4903 67.8903H19.8761L21.4853 81.0606ZM33.349 0.5H32.849V1V81V81.5H33.349H51.3951H51.7106L51.8464 81.2152L57.4347 69.4925L57.4834 69.3904V69.2773V45.203V45.0871L57.4323 44.9829L55.5487 41.1399L57.4347 37.1837L57.4834 37.0816V36.9686V12.7798V12.6673L57.4351 12.5655L51.8468 0.785695L51.7113 0.5H51.3951H33.349ZM66.6879 0.5H66.3717L66.2362 0.785695L60.6479 12.5655L60.5996 12.6673V12.7798V69.2773V69.3904L60.6483 69.4925L66.2366 81.2152L66.3724 81.5H66.6879H79.1457H79.4613L79.5971 81.2152L85.1853 69.4925L85.234 69.3904V69.2773V12.7798V12.6673L85.1858 12.5655L79.5975 0.785695L79.4619 0.5H79.1457H66.6879ZM104.679 1V65.1748H96.6559V1V0.5H96.1559H88.8503H88.3503V1V69.2773V69.3904L88.3989 69.4925L93.9872 81.2152L94.123 81.5H94.4386H106.896H107.212L107.348 81.2152L112.936 69.4925L112.985 69.3904V69.2773V1V0.5H112.485H105.179H104.679V1ZM116.601 0.5H116.101V1V16.3252V16.8252H116.601H123.134V81V81.5H123.634H130.94H131.44V81V16.8252H138H138.5V16.3252V1V0.5H138H116.601ZM15.8059 34.2586L17.9008 51.565H13.5814L15.8059 34.2586ZM41.1546 16.8252H49.1777V32.866H41.1546V16.8252ZM49.2049 65.1748H41.1546V49.134H49.2049V65.1748ZM76.9556 65.1748H68.9053V16.8252H76.9556V65.1748Z"
          stroke="white"
          strokeWidth="3"
        />
      </Svg>
    </View>
  )
}