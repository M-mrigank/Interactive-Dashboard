import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { token } from "../../theme";

const FAQ=()=>{

    const theme=useTheme();
    const colors=token(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subTitle={"Frequently Asked Questions Page"}/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Imported Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam maiores optio labore! Architecto laudantium sint, illo, officia rerum in tempore ea facilis illum molestiae officiis fugiat maxime accusamus nihil.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;