import React, {useEffect, useMemo} from "react";
import {useRouter} from "next/router";
import PageLayout from "../../layouts/Page/Page.layout";
import Head from "next/head";
import {css} from "../../helpers/css";
import Button from "../../components/Button/Button";
import {BsArrowLeft} from "react-icons/bs";
import {GetServerSideProps} from "next";
import {abbreviate, isValidEthereumAddress, jsonify} from "../../helpers/strings";
import {ethers} from "ethers";
import Pane from "../../components/Pane/Pane";
import ProfileStore from "../../stores/Profile.store";
import {observer} from "mobx-react-lite";
import Link from "../../components/Link/Link";
import Pixel from "../../components/Pixel/Pixel";

interface ProfileProps {
    address: string;
    ens?: string | null;
}

const Profile: React.FC<ProfileProps> = observer(({address, ens}) => {
    const router = useRouter()
    const store = useMemo(() => new ProfileStore(address), [address])
    useEffect(() => {
        store.init()
    }, [address])
    return <PageLayout>
        <Head>
            <title>The Doge NFT | Profile</title>
        </Head>
        <div>
            <div className={css("mb-8")}>
                <Button onClick={() => router.push("/")}>
                    <BsArrowLeft size={15}/>
                </Button>
            </div>
            <div className={css("mt-4", "text-2xl", "max-w-3xl", "m-auto", "flex", "justify-center")}>
                <div className={css("flex", "flex-col", "items-center")}>
                    <div className={css("font-bold")}>{abbreviate(address)}</div>
                    {ens && <div className={css("text-lg")}>{ens}</div>}
                    <div className={css("flex", "flex-col", "items-center", "mt-4")}>
                        <div>{store.dogBalance ? store.dogBalance : "---"}</div>
                        <div className={css("text-base")}>$DOG</div>
                    </div>
                </div>
            </div>
            <div className={css("grid", "grid-cols-1", "lg:grid-cols-3", "mt-14", "gap-10")}>
                <Pane title={`Pixels (${store.pixels.length})`}>
                    <div className={css("flex", "flex-wrap", "gap-5", "justify-center")}>
                        {store.pixels.map(token => {
                            const x = token.metadata.attributes.filter((attr: any) => attr.trait_type === "X Coordinate")[0].value
                            const y = token.metadata.attributes.filter((attr: any) => attr.trait_type === "Y Coordinate")[0].value
                            const color = token.metadata.attributes.filter((attr: any) => attr.trait_type === "Hex")[0].value
                            return <div key={`pixels-${token.tokenId}`} className={css("flex", "space-x-4")}>
                                <Pixel id={token.tokenId} x={x} y={y} color={color}/>
                            </div>
                        })}
                    </div>
                </Pane>
                <Pane title={`Fast Food Doges (${store.fastFoodDoges.length})`}>
                    <div>
                        {store.fastFoodDoges.map(token => {
                            const maxWidth = 250
                            return <div key={`FFD-${token.tokenId}`} className={css("flex", "flex-col", "space-y-4")} style={{maxWidth}}>
                                <div>
                                    <img className={css("border-black", "border-2")} src={token.metadata.image} style={{maxWidth}}/>
                                    <div className={css("flex", "justify-between")}>
                                        <div>#{token.tokenId}</div>
                                        <div>{token.metadata.isBaby ? "baby" : "adult"}</div>
                                    </div>
                                    <div>
                                        {token.metadata.attributes.map((attr: any) => <div className={css("grid", "grid-cols-2")}>
                                            <div>{attr.trait_type}</div>
                                            <div>{attr.value}</div>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </Pane>
            </div>
        </div>
    </PageLayout>
})

export const getServerSideProps: GetServerSideProps<ProfileProps> = async (context) => {
    let ens, validatedAddress

    const provider = ethers.getDefaultProvider("mainnet")
    const addressOrEnsName = context.params?.addressOrEnsName as string

    if (!addressOrEnsName) {
        throw new Error("Must provide an address")
    } else if (!isValidEthereumAddress(addressOrEnsName)) {
        try {
            const queriedAddress = await provider.resolveName(addressOrEnsName)
            if (!queriedAddress) {
                throw new Error("No address found")
            }
            validatedAddress = queriedAddress
            ens = addressOrEnsName
        } catch (e) {
            throw new Error("Could not find address")
        }
    } else {
        validatedAddress = addressOrEnsName
        try {
            ens = await provider.lookupAddress(addressOrEnsName)
        } catch (e) {
            console.error("could not get ens name")
        }
    }


    return {
        props: {
            address: validatedAddress,
            ens: ens ? ens : null,
        }
    }
}

export default Profile
