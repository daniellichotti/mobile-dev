import { SectionList, Text } from 'react-native';

const sections = [
  { title: 'Frutas', data: ['Maçã', 'Banana'] },
  { title: 'Legumes', data: ['Batata Frita', 'Cenoura'] },
]

export function SectionList() {

  return (
    <SectionList
      style={{ marginTop: 30 }}
      sections={sections}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <Text>{item}</Text>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontWeight: 'bold', backgroundColor: '#ddd' }}>{section.title}</Text>
      )}
    />
  );
}