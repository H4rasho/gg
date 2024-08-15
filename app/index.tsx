import {useState} from 'react'
import {View} from 'react-native'
import {Text} from '~/components/ui/text'
import {Button} from '~/components/ui/button'
import {BadgePlus} from '~/lib/icons/BadgePlus'
import {H1} from '~/components/ui/typography'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import {FlatList} from 'react-native'
import {Expense} from '~/types'
import {AddExpenseForm} from '~/components/AddExpenseForm'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function Screen() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  function addExpenses(expense: Expense) {
    const newExspenses = [...expenses, expense]
    setExpenses([])
  }

  const balance = 453324
  const initialBudget = 450000

  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
    })
  }

  return (
    <SafeAreaView>
      <View className="p-6 min-h-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <H1 className="text-6xl text-center">{formatCurrency(balance)}</H1>
          </CardContent>
          <CardFooter className="flex flex-row justify-between">
            <View>
              <Text className="font-bold">Presupuesto Inicial</Text>
              <Text className="">{formatCurrency(initialBudget)}</Text>
            </View>
            <View>
              <Text className="font-bold">Gastos Realizados</Text>
              <Text className="">{formatCurrency(43434)}</Text>
            </View>
          </CardFooter>
        </Card>
        <FlatList
          data={expenses}
          renderItem={({item}) => (
            <View>
              <Text>{item.amount}</Text>
              <Text>{item.category}</Text>
            </View>
          )}
        ></FlatList>

        <View className="absolute bottom-8 right-0">
          <AddExpenseForm />
        </View>
      </View>
    </SafeAreaView>
  )
}
