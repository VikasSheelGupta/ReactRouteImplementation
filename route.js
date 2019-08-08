import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "../components/Shared/Loader";

const Home = lazy(() => import("../components/Home"));
const AllServices = lazy(() => import("../components/AllServices"));
const State = lazy(() => import("../components/State"));
const Favourites = lazy(() => import("../components/Favourites"));
const FlagshipScheme = lazy(() => import("../components/FlagshipScheme"));
const ServiceDetails = lazy(() => import("../components/Shared/ServiceDetails"));
const ServiceInfo = lazy(() => import("../components/Shared/ServiceDetails/ServiceInfo"));
const Settings = lazy(() => import("../components/Settings"));
const Login = lazy(() => import("../components/Auth/Login"));
const LoginWithOTP = lazy(() => import("../components/Auth/Login/LoginWithOTP"));
const PrivacyPolicy = lazy(() => import("../components/Settings/privacyPolicy"));
const UmangFAQ = lazy(() => import("../components/Settings/UmangFAQ"));
const TermsOfService = lazy(() => import("../components/Settings/termsOfService"));
const Register = lazy(() => import("../components/Auth/Register"));
const RegisterValidateOtp = lazy(() => import("../components/Auth/Register/registerValidateOtp"));
const ForgotMPIN = lazy(() => import("../components/Auth/ForgotMPIN"));
const ForgotMpinValidateOtp = lazy(() => import("../components/Auth/ForgotMPIN/forgotMpinValidateOtp"));
const UpdateMPIN = lazy(() => import("../components/Auth/ForgotMPIN/updateMpin"));
const SetMPIN = lazy(() => import("../components/Settings/setMpin"));
const ChangeMPIN = lazy(() => import("../components/Settings/changeMpin"));
const OTPLogin = lazy(() => import("../components/Auth/Login/OTPLogin"));

//Flagship Route
const AyushmanPage = lazy(() => import("../components/FlagshipScheme/AyushmanPage"));
const AwasYojna = lazy(() => import("../components/FlagshipScheme/AwasYojna"));
const JanDhanYojna = lazy(() => import("../components/FlagshipScheme/JanDhanYojna"));
const MudraYojna = lazy(() => import("../components/FlagshipScheme/MudraYojna"));
const UjjwalaYojna = lazy(() => import("../components/FlagshipScheme/UjjwalaYojna"));
const Saubhagya = lazy(() => import("../components/FlagshipScheme/Saubhagya"));
const SwachhBharat = lazy(() => import("../components/FlagshipScheme/SwachhBharat"));

// PAN card service
const TrackYourPAN = lazy(() => import("../components/UmangServices/PAN/TrackYourPAN.js"));
const PANstatus = lazy(() => import("../components/UmangServices/PAN/PANStatus.js"));
const PANInfo = lazy(() => import("../components/UmangServices/PAN/PANInfo.js"));


// Child Line 1098 Service
const ChildLineVideo1 = lazy(() => import("../components/UmangServices/ChildLine/ChildLineVideo1.js"));
const ChildLineVideo2 = lazy(() => import("../components/UmangServices/ChildLine/ChildLineVideo2.js"));
const ChildLineVideo3 = lazy(() => import("../components/UmangServices/ChildLine/ChildLineVideo3.js"));
const ChildLineVideo4 = lazy(() => import("../components/UmangServices/ChildLine/ChildLineVideo4.js"));

// AICTE
const ApprovedInstitutions = lazy(() => import("../components/UmangServices/AICTE/ApprovedInstitutions.js"));
const InstituteList = lazy(() => import("../components/UmangServices/AICTE/InstituteList.js"));
//GSTN Card Service
// const SearchTaxpayer = lazy(() => import("../components/UmangServices/GSTN/searchTaxpayer.js"));
// const TaxPayersDetails = lazy(() => import("../components/UmangServices/GSTN/taxPayerDetails.js"));
// const SearchTaxpayerInfo = lazy(() => import("../components/UmangServices/GSTN/searchTaxPayersInfo.js"));

// Directorate of Marketing card service routes
const MarketPrice = lazy(() => import("../components/UmangServices/DirectorateOfMarketing/marketPrice"));
const PastPrice = lazy(() => import("../components/UmangServices/DirectorateOfMarketing/pastPrice"));

//Extension Refomr
const StateListER = lazy(() => import("../components/UmangServices/ExtensionReforms/StateListER"));


//Pharma Sahi Daam service
// const PharmaSearchMedicine = lazy(() => import("../components/UmangServices/PharmaSahiDaam/PharmaSearchMedicine"));
// const PharmaFAQ = lazy(() => import("../components/UmangServices/PharmaSahiDaam/PharmaFAQ"));
// const MedsSearchResult = lazy(() => import("../components/UmangServices/PharmaSahiDaam/MedsSearchResult"));
// const MedicineDetails = lazy(() => import("../components/UmangServices/PharmaSahiDaam/MedicineDetails"));
// const MedsSubstitute = lazy(() => import("../components/UmangServices/PharmaSahiDaam/MedsSubstitute"));
// const NPPA = lazy(() => import("../components/UmangServices/PharmaSahiDaam/NPPA"));
// const KnowSearchType = lazy(() => import("../components/UmangServices/PharmaSahiDaam/KnowSearchType"));
// const SearchInfo = lazy(() => import("../components/UmangServices/PharmaSahiDaam/SearchInfo"));

// EPFO service
// const EmpCentric = lazy(() => import("../components/UmangServices/EPFO/EmpCentric.js"));
// const EPFODetails = lazy(() => import("../components/UmangServices/EPFO/EPFODetails.js"));
// const PassbookAccountDetail = lazy(() => import("../components/UmangServices/EPFO/PassbookAccountDetail.js"));
// const EPFOUANDetails = lazy(() => import("../components/UmangServices/EPFO/EPFOUANDetails.js"));
// const EPFODeposit = lazy(() => import("../components/UmangServices/EPFO/EPFODeposit.js"));
// const EPFOWithdrawal = lazy(() => import("../components/UmangServices/EPFO/EPFOWithdrawal.js"));
// const EPFOInfo = lazy(() => import("../components/UmangServices/EPFO/EPFOInfo.js"));
// const EPFOForm = lazy(() => import("../components/UmangServices/EPFO/EPFOForm.js"));

// Kisan Suvidha
// const AgroAdvisory = lazy(() => import("../components/UmangServices/KisanSuvidha/AgroAdvisory"));
// const WeatherForecast = lazy(() => import("../components/UmangServices/KisanSuvidha/WeatherForecast"));
// const PesticideDealers = lazy(() => import("../components/UmangServices/KisanSuvidha/PesticideDealers"));
// const FarmMachineryDealers = lazy(() => import("../components/UmangServices/KisanSuvidha/FarmMachinery"));
// const FertilizerDealers = lazy(() => import("../components/UmangServices/KisanSuvidha/FertilizerDealers"));
// const SeedDealers = lazy(() => import("../components/UmangServices/KisanSuvidha/SeedDealers"));

//Soil Health Card
// const ViewByMobile = lazy(() => import("../components/UmangServices/SoilHealthCard/viewByMobile"));
// const ViewByLocation = lazy(() => import("../components/UmangServices/SoilHealthCard/viewByLocation"));
// const FarmerList = lazy(() => import("../components/UmangServices/SoilHealthCard/farmerList"));
// const SHCDetails = lazy(() => import("../components/UmangServices/SoilHealthCard/shcDetails"));
// const MbnDetails = lazy(() => import("../components/UmangServices/SoilHealthCard/mbnDetails"));
// const FarmerDetails = lazy(() => import("../components/UmangServices/SoilHealthCard/farmerDetails"));
const Routes = () => {
    return (
        <div className="appContent" id="appContent">
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() =>
                            localStorage.getItem("login_token") &&
                            JSON.parse(localStorage.getItem("login_token")).tkn ? (
                                <Home />
                            ) : (
                                <FlagshipScheme />
                            )
                        }
                    />
                    <Route path="/login" component={props => <Login search={props.location.search} />} />

                    <Route path="/home" component={() => <Home />} />
                    <Route path="/allservices" component={() => <AllServices />} />
                    <Route path="/state" component={() => <State />} />
                    <Route path="/favourites" component={() => <Favourites />} />
                    <Route path="/flagshipScheme" component={() => <FlagshipScheme />} />
                    <Route path="/servicedetails/:serviceID" component={() => <ServiceDetails />} />
                    <Route path="/ServiceInfo" component={() => <ServiceInfo />} />
                    <Route path="/settings" component={() => <Settings />} />
                    <Route path="/privacyPolicy" component={() => <PrivacyPolicy />} />
                    <Route path="/umangFAQ" component={() => <UmangFAQ />} />
                    <Route path="/termsOfService" component={() => <TermsOfService />} />
                    <Route path="/register" component={() => <Register />} />
                    <Route path="/registerValidateOtp" component={() => <RegisterValidateOtp />} />
                    <Route path="/forgotMPIN" component={() => <ForgotMPIN />} />
                    <Route path="/forgotMpinValidateOtp" component={() => <ForgotMpinValidateOtp />} />
                    <Route path="/updateMpin" component={() => <UpdateMPIN />} />
                    <Route path="/setMpin" component={() => <SetMPIN />} />
                    <Route path="/changeMpin" component={() => <ChangeMPIN />} />
                    <Route path="/LoginWithOTP" component={() => <LoginWithOTP />} />
                    <Route path="/OTPLogin" component={() => <OTPLogin />} />

                    {/*Flagship route */}
                    <Route path="/AyushmanPage" component={() => <AyushmanPage />} />
                    <Route path="/AwasYojna" component={() => <AwasYojna />} />
                    <Route path="/JanDhanYojna" component={() => <JanDhanYojna />} />
                    <Route path="/MudraYojna" component={() => <MudraYojna />} />
                    <Route path="/UjjwalaYojna" component={() => <UjjwalaYojna />} />
                    <Route path="/Saubhagya" component={() => <Saubhagya />} />
                    <Route path="/SwachhBharat" component={() => <SwachhBharat />} />

                    {/* PAN card service routes*/}
                    <Route path="/TrackYourPAN" component={() => <TrackYourPAN />} />
                    <Route path="/PANstatus" component={() => <PANstatus />} />
                    <Route path="/PANInfo" component={() => <PANInfo />} />

                     {/* ChildLine service routes*/}   
                    <Route path="/ChildLineVideo1" component={() => <ChildLineVideo1 />} />
                    <Route path="/ChildLineVideo2" component={() => <ChildLineVideo2 />} />
                    <Route path="/ChildLineVideo3" component={() => <ChildLineVideo3 />} />
                    <Route path="/ChildLineVideo4" component={() => <ChildLineVideo4 />} />

                    {/*AICTE */}

                    <Route path="/ApprovedInstitutions" component={() => <ApprovedInstitutions />}   />
                    <Route path="/InstituteList" component={() => <InstituteList />}   />
                    {/*GSTN Service Routes */}
                    {/* <Route path="/searchTaxpayer" component={() => <SearchTaxpayer />} />
                    <Route path="/taxPayersDetails" component={() => <TaxPayersDetails />} />
                    <Route path="/SearchTaxpayerInfo" component={() => <SearchTaxpayerInfo />} /> */}

                    {/* Directorate of Marketing card service routes*/}
                    <Route path="/MarketPrice" component={() => <MarketPrice />} />
                    <Route path="/PastPrice" component={() => <PastPrice />} />

                    {/* Extension Reforms*/}
                    <Route path="/StateListER" component={() => <StateListER />} />
    

                    {/* Pharma Sahi Daam card service routes*/}
                    {/* <Route path="/PharmaSearchMedicine" component={() => <PharmaSearchMedicine />} />
                    <Route path="/PharmaFAQ" component={() => <PharmaFAQ />} />
                    <Route path="/MedsSearchResult" component={() => <MedsSearchResult />} />
                    <Route path="/MedicineDetails" component={() => <MedicineDetails />} />
                    <Route path="/MedsSubstitute" component={() => <MedsSubstitute />} />
                    <Route path="/NPPA" component={() => <NPPA />} />
                    <Route path="/KnowSearchType" component={() => <KnowSearchType />} />
                    <Route path="/SearchInfo" component={() => <SearchInfo />} /> */}

                    {/*EPFO Service Routes */}
                    {/* <Route path="/EmpCentric" component={() => <EmpCentric />} />
                    <Route path="/EPFODetails" component={() => <EPFODetails />} />
                    <Route path="/PassbookAccountDetail" component={() => <PassbookAccountDetail />} />
                    <Route path="/EPFOUANDetails" component={() => <EPFOUANDetails />} />
                    <Route path="/EPFODeposit" component={() => <EPFODeposit />} />
                    <Route path="/EPFOWithdrawal" component={() => <EPFOWithdrawal />} />
                    <Route path="/EPFOInfo" component={() => <EPFOInfo />} />
                    <Route path="/EPFOForm" component={() => <EPFOForm />} /> */}

                    {/*Kisan Suvidha*/}
                    {/* <Route path="/agro-advisory" component={() => <AgroAdvisory />} />
                    <Route path="/weather-forecast" component={() => <WeatherForecast />} />
                    <Route path="/pesticide-dealers" component={() => <PesticideDealers />} />
                    <Route path="/farm-machinery-dealers" component={() => <FarmMachineryDealers />} />
                    <Route path="/fertilizers-dealers" component={() => <FertilizerDealers />} />
                    <Route path="/seed-dealers" component={() => <SeedDealers />} /> */}

                    {/* Soil Health Card */}
                    {/* <Route path="/viewByMobile" component={() => <ViewByMobile />} />
                    <Route path="/viewByLocation" component={() => <ViewByLocation />} />
                    <Route path="/farmerList" component={() => <FarmerList />} />
                    <Route path="/shcDetails" component={() => <SHCDetails />} />
                    <Route path="/mbnDetails" component={() => <MbnDetails />} />
                    <Route path="/farmerDetails" component={() => <FarmerDetails />} /> */}


                </Switch>
            </Suspense>
        </div>
    );
};

export default Routes;
