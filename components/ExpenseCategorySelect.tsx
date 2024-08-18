import { PortalHost, useModalPortalRoot } from "@rn-primitives/portal";
import { Option } from "@rn-primitives/select";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { EXPENSE_CATEGORIES } from "~/lib/constants";

interface ExpenseCategorySelectProps {
  value: Option;
  onChange: (value: Option) => void;
}

export function ExpenseCategorySelect({
  value,
  onChange,
}: ExpenseCategorySelectProps) {
  const { sideOffset, ...rootProps } = useModalPortalRoot();
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    // Make sure the content is not hidden by the bottom safe area
    bottom: insets.bottom + Math.abs(sideOffset),
    left: 16,
    right: 16,
  };

  return (
    <View className="z-10" {...rootProps}>
      <Select onValueChange={(item) => onChange(item)} value={value}>
        <SelectTrigger className="w-full">
          <SelectValue
            className="text-foreground text-sm native:text-lg"
            placeholder="Seleciona una categoría"
          />
        </SelectTrigger>
        <SelectContent
          insets={contentInsets}
          sideOffset={sideOffset}
          portalHost="expense-category-select"
          align="start"
          disablePositioningStyle
          side="top"
        >
          <SelectGroup>
            <SelectLabel>Categoría</SelectLabel>
            {EXPENSE_CATEGORIES.map((category) => (
              <ScrollView key={category.id}>
                <SelectItem
                  label={category.name}
                  value={category.id}
                ></SelectItem>
              </ScrollView>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <PortalHost name="expense-category-select" />
    </View>
  );
}