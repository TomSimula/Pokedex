import { Box, Card, HStack, Icon, Image, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { ChevronsRightIcon } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { Pokemon } from "~src/module/pokedex/model/pokemon.model";
import { appRoutes } from "~src/rooting/routes.config";

interface IPokemonItem {
  prop: Pokemon;
}

const PokedexPokemonItem: React.FC<IPokemonItem> = ({ prop }) => {
  const { t } = useTranslation(["pokedex"]);

  return (
    <Link
      href={{
        pathname: appRoutes.pokedex.pokemonInfo,
        params: { id: prop.id },
      }}
      asChild
    >
      <TouchableOpacity>
        <Card m="$2" borderColor="$coolGray300" borderWidth="$4">
            <HStack alignItems="center">
              <Image
              source={{ uri: prop.image }}
              alt={t("pokedex:POKEDEX.ALT")}
            />
            <Text ml="$2" textTransform="capitalize">
              {prop.name}
            </Text>
            <Box alignItems="flex-end" flexGrow={1}>
              <Icon as={ChevronsRightIcon} size="xl" />
            </Box>
          </HStack>
        </Card>
      </TouchableOpacity>
    </Link>
  );
};

export default PokedexPokemonItem;

