import { Loader ,Flex} from "@mantine/core";

export default function LoaderCom() {

  return(
    <Flex justify="center" align="center" style={{height: "100vh" ,
    background : "linear-gradient(-225deg, #3e336d 0%, #3584A7 51%, #30D2BE 100%)",
    color : "rgb(50, 50, 50)" }}>

    <Loader color="lime" size={60} type="bars" />

    </Flex>
  )
}
