import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';

const ProfilePic = () => {
    return (
        <View style={styles.ImageContainer}>
            <Image
                source={{ uri: "https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034957463?e=2147483647&v=beta&t=0SFHyDkPN7RGKIO0VEy33a6KrtluAN3aAvxkL2dbHSM" }}
                style={styles.Image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    ImageContainer: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    Image: {
        height: SPACING.space_36,
        width: SPACING.space_36,
    },
});

export default ProfilePic;