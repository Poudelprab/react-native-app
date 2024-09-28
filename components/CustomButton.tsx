import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, GestureResponderEvent } from "react-native";

// Define prop types for CustomButton using an interface
interface CustomButtonProps {
  title: string;                      // The text to display on the button
  handlePress: (event: GestureResponderEvent) => void; // Function to handle the button press
  containerStyles?: string;           // Additional styling for the button container (optional)
  textStyles?: string;                // Additional styling for the button text (optional)
  isLoading?: boolean;                // Boolean to show a loading indicator (optional)
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles = "", // Default to an empty string if no styles are passed
  textStyles = "",      // Default to an empty string for text styles as well
  isLoading = false,    // Default to false if isLoading is not provided
}) => {
  return (
    <TouchableOpacity
      // Handle press and apply styles dynamically, including opacity when loading
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}  // Disable the button while loading
    >
      {/* Display the button title */}
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {/* Show loading indicator when isLoading is true */}
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"  // Margin left for spacing
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
