import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { changeTitle } from "@/globals";
import { Typography } from "beauty-ui-components";

export const DocsTypography = () => {
    changeTitle("Typography | Beauty/ui");
    const codes = {
        h1: `<Typography variant="h1">Heading 1</Typography>`,
        h2: `<Typography variant="h2">Heading 2</Typography>`,
        h3: `<Typography variant="h3">Heading 3</Typography>`,
        h4: `<Typography variant="h4">Heading 4</Typography>`,
        large: `<Typography variant="large">Large</Typography>`,
        muted: `<Typography variant="muted">Muted</Typography>`,
        small: `<Typography variant="small">Small</Typography>`,
        p: `<Typography variant="p">Paragraph</Typography>`,
    };
    return (
        <div>
            <BreadCrumb titles={["Docs", "Typography"]} />
            <Typography variant="h2" sx={{ marginTop: "10px" }}>
                Typography
            </Typography>
            <Typography variant="p" sx={{ marginTop: "10px" }}>
                Styles for headings, paragraphs and more.
            </Typography>

            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                h1
            </Typography>
            <Demo code={codes.h1}>
                <Typography variant="h1">Heading 1</Typography>
            </Demo>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                h2
            </Typography>
            <Demo code={codes.h2}>
                <Typography variant="h2">Heading 2</Typography>
            </Demo>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                h3
            </Typography>
            <Demo code={codes.h3}>
                <Typography variant="h3">Heading 3</Typography>
            </Demo>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                h4
            </Typography>
            <Demo code={codes.h4}>
                <Typography variant="h4">Heading 4</Typography>
            </Demo>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                Large
            </Typography>
            <Demo code={codes.large}>
                <Typography variant="large">Large text</Typography>
            </Demo>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                Small
            </Typography>
            <Demo code={codes.small}>
                <Typography variant="small">Small text</Typography>
            </Demo>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                p
            </Typography>
            <Demo code={codes.p}>
                <Typography variant="p">This is a paragraph</Typography>
            </Demo>
            <Typography variant="h3" sx={{ marginTop: "40px" }}>
                Muted
            </Typography>
            <Demo code={codes.muted}>
                <Typography variant="muted">Muted text</Typography>
            </Demo>
        </div>
    );
};
