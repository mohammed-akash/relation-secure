import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import BGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';


const HeaderBar = ({ title }) => {
    return (
        <View style={styles.HeaderContainer}>
            <BGIcon
                name="menu"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
            />
            <ProfilePic />
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainer: {
        width: "100%",
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
});

export default HeaderBar;