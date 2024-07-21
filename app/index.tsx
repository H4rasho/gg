import * as React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from '~/components/ui/button';
import { BadgePlus } from '~/lib/icons/BadgePlus';

export default function Screen() {
  
  let expense = 0;
  
  function addExpenses () {
    expense +=1;
    console.log(expense);
  }
  
  return (

    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text className="text-4xl">Control de Gastos</Text>
      <View style={{top: 250, width:200}}>
        <Button style={{borderRadius: 20}} variant="outline" size="lg" onPress={addExpenses}>
          <Text><BadgePlus color="black" size={15} />Añadir Gastos</Text>
        </Button>
      </View>
    </View>
  );
}
