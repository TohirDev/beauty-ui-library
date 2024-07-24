import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { changeTitle } from "@/globals";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Typography,
} from "beauty-ui-components";

export const DocsCard = () => {
    changeTitle("Card | Beuaty/ui");
    const code = `
  <Card sx={{ width: "500px" }}>
    <CardHeader>
      <CardTitle>Porsche 911</CardTitle>
      <CardDescription>
        The legendary 911. The identity of the Porsche brand - since
        1963
      </CardDescription>
    </CardHeader>
    <CardContent>
      <img
        src="Porche.jpg"
        alt="Porche img"
      />
    </CardContent>
    <CardFooter>
      <Button variant="primary">Purchase</Button>
    </CardFooter>
  </Card>`;
    return (
        <div>
            <BreadCrumb titles={["Docs", "Card"]} />
            <Typography variant="h2">Card</Typography>
            <Typography variant="p">
                Cards contain content and actions about a single subject.
            </Typography>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                Card
            </Typography>
            <Demo code={code}>
                <Card sx={{ width: "500px" }}>
                    <CardHeader>
                        <CardTitle>Porsche 911</CardTitle>
                        <CardDescription>
                            The legendary 911. The identity of the Porsche brand
                            - since 1963
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img
                            src="https://images-porsche.imgix.net/-/media/646ED7CDD4DF4060A4823F3A9DB8DA22_97CB2E119D8749C19004EC939CD09E96_CZ25W01IX0010911-carrera-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format"
                            alt="Porche img"
                            style={{ margin: "20px 0" }}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button variant="primary">Purchase</Button>
                    </CardFooter>
                </Card>
            </Demo>
        </div>
    );
};
