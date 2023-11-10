import {
    Card,
    Text,
    CardBody,
    Image,
    Stack,
    Heading,
    Divider,
    CardFooter,
    Button,
} from "@chakra-ui/react";

const ProductDetail = ({ name, imgSrc, description, stock, price, sku }) => {
    return (
        <>
            <Card maxW="sm">
                <CardBody>
                    <Image
                        src={imgSrc}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{name}</Heading>
                        <Text>{description}</Text>
                        <Text color="blue.600" fontSize="2xl" mb={4}>
                            ${price}
                        </Text>
                    </Stack>
                    <Stack>
                        <Divider />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Text color="gray.500" fontSize="sm">
                                SKU: {sku}
                            </Text>
                            <Text color="gray.500" fontSize="sm">
                                Stock: {stock}
                            </Text>
                        </Stack>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                        Comprar ahora
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                        Agregar al carrito
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export { ProductDetail };
