const Sequelize = require("sequelize");
// const fs = require("fs");
const moment = require("moment");
const numeral = require("numeral");
const dbController = require('../src/js/dbController');

// const interimData = require("./getExcel");
// const readyData = interimData.dataExport;


// Establish connection and export
// const sequelize = new Sequelize("PV_Pipeline", "postgres", "pass123", {
//     // gimme postgres, please!
//     dialect: "postgres",
//     host: "localhost",
//     logging: false
//
// })
//Heroku connection
const sequelize = new Sequelize("d5s0r8rfr24qro", "bndaxkydcmrbat", "ec398edaf3221d2fa68561b3353d30e234f93f62d09cf06100dba9181241c6cb", {
    // gimme postgres, please!
    dialect: "postgres",
    host: "ec2-54-247-85-251.eu-west-1.compute.amazonaws.com",
    port: 5432,
    // ssl:true
    dialectOptions:{
        ssl:true
    }
})



//Creates DB

const Opportunity = sequelize.define("opportunities", {
    one_OppName:{type: Sequelize.STRING,allowNull:false, primaryKey: true},
    one_PvLead:{type: Sequelize.STRING,allowNull:true},
    opp_Status:{type: Sequelize.STRING,allowNull:true},
    opp_CurrentStage: {type: Sequelize.INTEGER,allowNull:true},
    one_IntroDate:{type: Sequelize.DATEONLY,allowNull:true},
    one_Introducer:{type: Sequelize.STRING,allowNull:true},
    one_Referrer:{type: Sequelize.STRING,allowNull:true},
    one_InvestmentAmount:{type: Sequelize.INTEGER,allowNull:true},
    one_PreMoney:{type: Sequelize.INTEGER,allowNull:true},
    one_TotalInvestment:{type: Sequelize.INTEGER,allowNull:true},
    one_EquityPercentage:{type: Sequelize.FLOAT,allowNull:true},
    one_Location:{type: Sequelize.STRING,allowNull:true},
    one_Sector:{type: Sequelize.STRING,allowNull:true},
    one_InvestmentStage:{type: Sequelize.STRING,allowNull:true},
    one_InvestmentToDate:{type: Sequelize.INTEGER,allowNull:true},
    one_Activity:{type: Sequelize.STRING,allowNull:true},
    one_TargetCustomers:{type: Sequelize.STRING,allowNull:true},
    two_NdaSigned:{type: Sequelize.STRING,allowNull:true},
    two_TeamMembers:{type: Sequelize.STRING,allowNull:true},
    three_CompanyDescription: {type: Sequelize.STRING(2000),allowNull:true},
    three_PvSplit: {type: Sequelize.INTEGER,allowNull:true},
    three_VpSplit: {type: Sequelize.INTEGER,allowNull:true},
    three_FundAllocation: {type: Sequelize.INTEGER,allowNull:true},
    three_proposalSentDateTeam: {type: Sequelize.DATEONLY,allowNull:true},
    three_ProposalSentDateIc: {type: Sequelize.DATEONLY,allowNull:true},
    three_IcMeetingDate: {type: Sequelize.DATEONLY,allowNull:true},
    three_IcApproved: {type: Sequelize.STRING,allowNull:true},
    four_PvInvestmentAmount: {type: Sequelize.INTEGER,allowNull:true},
    four_PremoneyValuation: {type: Sequelize.INTEGER,allowNull:true},
    four_TotalRoundAmount: {type: Sequelize.INTEGER,allowNull:true},
    four_NonDilutedEquity:{type: Sequelize.FLOAT,allowNull:true},
    four_FullyDilutedEquity:{type: Sequelize.STRING,allowNull:true},
    four_PriorReturn: {type: Sequelize.STRING,allowNull:true},
    four_expectedCompletionDate: {type: Sequelize.DATEONLY,allowNull:true},
    four_OfferTeamReviewer: {type: Sequelize.STRING,allowNull:true},
    four_OfferReviewedDate: {type: Sequelize.DATEONLY,allowNull:true},
    four_OfferIcReviewer: {type: Sequelize.STRING,allowNull:true},
    four_OfferIcApprovedDate: {type: Sequelize.DATEONLY,allowNull:true},
    four_OfferSentDate: {type: Sequelize.DATEONLY,allowNull:true},
    five_financialExternalProviderEngaged:{type:Sequelize.STRING,allowNull:true},five_financialSummary:{type:Sequelize.STRING,allowNull:true},
    five_lawyersUsed:{type:Sequelize.STRING,allowNull:true},five_LegalFee:{type:Sequelize.INTEGER,allowNull:true},
    five_CompanyLawyer:{type:Sequelize.STRING,allowNull:true},five_LegalSummary:{type:Sequelize.STRING,allowNull:true},
    five_ArticlesSummary:{type:Sequelize.STRING,allowNull:true},five_IaSummary:{type:Sequelize.STRING,allowNull:true},
    five_CovenantSummary:{type:Sequelize.STRING,allowNull:true},five_CddUsed:{type:Sequelize.STRING,allowNull:true},
    five_CddFee:{type:Sequelize.INTEGER,allowNull:true},five_CddSummary:{type:Sequelize.STRING,allowNull:true},
    five_MddExternalProviderEngaged:{type:Sequelize.STRING,allowNull:true},five_MddProvider:{type:Sequelize.STRING,allowNull:true},
    five_MddFee:{type:Sequelize.INTEGER,allowNull:true},five_MgtReferencesDone:{type:Sequelize.STRING,allowNull:true},
    five_MddSummary:{type:Sequelize.STRING,allowNull:true},five_KycConfirmedSignificantHolders:{type:Sequelize.STRING,allowNull:true},
    five_KycDateCompleted:{type:Sequelize.DATEONLY,allowNull:true},five_EisReviewed:{type:Sequelize.STRING,allowNull:true},
    five_EisAdvisor:{type:Sequelize.STRING,allowNull:true},five_EisSubmissionDate:{type:Sequelize.DATEONLY,allowNull:true},
    five_DealSummaryDone:{type:Sequelize.STRING,allowNull:true},five_DdReviewed:{type:Sequelize.STRING,allowNull:true},
    five_DdReviewer:{type:Sequelize.STRING,allowNull:true},five_DdReviewDate:{type:Sequelize.DATEONLY,allowNull:true},
    six_DateFinalIc:{type:Sequelize.DATEONLY,allowNull:true},six_InvestmentAmount:{type:Sequelize.INTEGER,allowNull:true},
    six_Premoney:{type:Sequelize.INTEGER,allowNull:true},six_TotalRound:{type:Sequelize.INTEGER,allowNull:true},
    six_EquityFinal:{type:Sequelize.FLOAT,allowNull:true},six_PriorReturn:{type:Sequelize.STRING,allowNull:true},
    six_CommitteeDecision:{type:Sequelize.STRING,allowNull:true},six_DecisionSupport:{type:Sequelize.STRING,allowNull:true},
    seven_EisAssuranceReceived:{type:Sequelize.STRING,allowNull:true},seven_DateEisReceived:{type:Sequelize.DATEONLY,allowNull:true},
    seven_PortfolioIntroduced:{type:Sequelize.STRING,allowNull:true},seven_PrDone:{type:Sequelize.STRING,allowNull:true},
    seven_ReviewedManagementAccs:{type:Sequelize.STRING,allowNull:true},seven_FinalLegalBible:{type:Sequelize.STRING,allowNull:true},
    seven_AgreedBoard:{type:Sequelize.STRING,allowNull:true},seven_SummarySent:{type:Sequelize.STRING,allowNull:true},
    eight_CompletionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_EisOneSentDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_EisThreeReceivedDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_EisFiveSentDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_EisFiveReceivedDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_UploadedEisToPortal: {type:Sequelize.STRING,allowNull:true},
    eight_SidecarInvestorOne: {type:Sequelize.STRING,allowNull:true},
    eight_SidecarInvestorOneAmount:{type:Sequelize.FLOAT,allowNull:true},
    eight_SidecarInvestorOneTransactionDate:{type:Sequelize.DATEONLY,allowNull:true},
    eight_SidecarInvestorOneCompletionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_SidecarInvestorOneEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_SidecarInvestorOneShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_SidecarInvestorTwo: {type:Sequelize.STRING,allowNull:true},
    eight_SidecarInvestorTwoAmount:{type:Sequelize.FLOAT,allowNull:true},
    eight_SidecarInvestorTwoTransactionDate:{type:Sequelize.DATEONLY,allowNull:true},
    eight_SidecarInvestorTwoCompletionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_SidecarInvestorTwoEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_SidecarInvestorTwoShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_VpInvestorOne: {type:Sequelize.STRING,allowNull:true},
    eight_VpInvestorOneAmount: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorOneTransactionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorOneCompletionDate:{type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorOneEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorOneShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_VpInvestorTwo: {type:Sequelize.STRING,allowNull:true},
    eight_VpInvestorTwoAmount: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorTwoTransactionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorTwoCompletionDate:{type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorTwoEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorTwoShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_VpInvestorThree: {type:Sequelize.STRING,allowNull:true},
    eight_VpInvestorThreeAmount: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorThreeTransactionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorThreeCompletionDate:{type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorThreeEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorThreeShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_VpInvestorFour: {type:Sequelize.STRING,allowNull:true},
    eight_VpInvestorFourAmount: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorFourTransactionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorFourCompletionDate:{type:Sequelize.DATEONLY,allowNull:true},
    eight_VpInvestorFourEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_VpInvestorFourShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_TrancheOneFund: {type:Sequelize.STRING,allowNull:true},
    eight_TrancheTwoFund: {type:Sequelize.STRING,allowNull:true},
    eight_TrancheThreeFund: {type:Sequelize.STRING,allowNull:true},
    eight_TrancheOneAmount: {type:Sequelize.FLOAT,allowNull:true},
    eight_TrancheTwoAmount: {type:Sequelize.FLOAT,allowNull:true},
    eight_TrancheThreeAmount: {type:Sequelize.FLOAT,allowNull:true},
    eight_TrancheOneTransactionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_TrancheTwoTransactionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_TrancheThreeTransactionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_TrancheOneCompletionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_TrancheTwoCompletionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_TrancheThreeCompletionDate: {type:Sequelize.DATEONLY,allowNull:true},
    eight_TrancheOneShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_TrancheTwoShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_TrancheThreeShares: {type:Sequelize.INTEGER,allowNull:true},
    eight_TrancheOneEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_TrancheTwoEquity: {type:Sequelize.FLOAT,allowNull:true},
    eight_TrancheThreeEquity: {type:Sequelize.FLOAT,allowNull:true},
    decline_Dropdown: {type:Sequelize.STRING,allowNull:true},
    decline_Rationale: {type:Sequelize.STRING(2000),allowNull:true},
    decline_PersonCancelling: {type:Sequelize.STRING,allowNull:true},
    decline_ToldFounders:  {type:Sequelize.STRING,allowNull:true},
    monitor_Dropdown: {type:Sequelize.STRING,allowNull:true},
    monitor_Notes:{type:Sequelize.STRING(2000),allowNull:true},
    monitor_FollowupDate: {type:Sequelize.DATEONLY,allowNull:true},

}, {freezeTableName: true})



// Creates DB
//
// Opportunity.sync();
//
// const Tester = sequelize.define("tester", {
//     name:{type: Sequelize.STRING,allowNull:false, unique: true, primaryKey: true},
//     date:{type: Sequelize.DATEONLY,allowNull:true},
//     number:{type: Sequelize.DOUBLE,allowNull:false}
// },{freezeTableName: true})
// //
// module.exports.sequelize = sequelize;
// module.exports.Tester = Tester;



//field mapping, anything not in here gets deleted
const fieldMapping = {
    SummaryName:"one_OppName", Status: "opp_Status",ReviewPraeturaLead:"one_PvLead", SummaryIntroductionDate:"one_IntroDate", SummaryIntroducerExternal:"one_Introducer", SummaryReferrer:"one_Referrer", SummaryInvestmentAmount:"one_InvestmentAmount", SummaryPreMoneyValuation:"one_PreMoney", SummaryTotalInvestmentAmount:"one_TotalInvestment", SummaryLocation:"one_Location", SummarySector:"one_Sector", SummaryInvestmentStage:"one_InvestmentStage", SummaryInvestment:"one_InvestmentToDate", SummaryCompanyActivity:"one_Activity", SummaryCompanyTargetCustomers:"one_TargetCustomers",
    SummaryEquity: "one_EquityPercentage", 
    ReviewNDASigned: "two_NdaSigned",
    ReviewTeam: "two_TeamMembers",
    ExternalCompanyDescription: "three_CompanyDescription",
    FundSplitEis: "three_PvSplit",
    FundSplitVp: "three_VpSplit",
    FundAllocationTotal: "three_FundAllocation",
    InvestmentRroposalReview: 'three_proposalSentDateTeam',
    InvestmentProposalIC: 'three_ProposalSentDateIc',
    DateOfICMeeting: 'three_IcMeetingDate',
    ApprovedByIC: 'three_IcApproved',
    PIPInvestment: 'four_PvInvestmentAmount',
    PIPPreMoneyValuation: 'four_PremoneyValuation',
    PIPTotalInvestmentAmount: 'four_TotalRoundAmount',
    PIPEquity: 'four_NonDilutedEquity',
    OfferEquityFullyDiluted: 'four_FullyDilutedEquity',
    PIPPrioReturn: 'four_PriorReturn',
    OfferExpectedDealCompletion: 'four_expectedCompletionDate',
    OfferReviewedBy: 'four_OfferTeamReviewer',
    OfferReviewedDate: 'four_OfferReviewedDate',
    OfferApprovedByICDelegate: 'four_OfferIcReviewer',
    OfferApprovedByICDate: 'four_OfferIcApprovedDate',
    OfferSentToFounders: 'four_OfferSentDate',
    DDAndLegalComplimentInternalReview: 'five_financialExternalProviderEngaged',
    DDAndLegalSummaryComments: 'five_financialSummary',
    DDAndLegalLawyerAppointed: 'five_lawyersUsed',
    DDAndLegalLawyerFee: 'five_LegalFee',
    DDAndLegalCompanyLawyer: 'five_CompanyLawyer',
    DDAndLegalLDDSummary: 'five_LegalSummary',
    DDAndLegalArticlesSummary: 'five_ArticlesSummary',
    DDAndLegalAgreementSummary: 'five_IaSummary',
    DDAndLegalInvestorCovenantSummary: 'five_CovenantSummary',
    DDAndLegalCDDAppointed: 'five_CddUsed',
    DDAndLegalCDDFee: 'five_CddFee',
    DDAndLegalCDDSummary: 'five_CddSummary',
    DDAndLegalProviderAppointed: 'five_MddExternalProviderEngaged',
    DDAndLegalWhoAppointed: 'five_MddProvider',
    DDAndLegalMDDFee: 'five_MddFee',
    DDAndLegaRreferenceUndertaken: 'five_MgtReferencesDone',
    DDAndLegalMDDSummary: 'five_MddSummary',
    DDAndLegalKYCConfirmed: 'five_KycConfirmedSignificantHolders',
    DDAndLegalKYCCompleted: 'five_KycDateCompleted',
    DDAndLegalEISAAReviewed: 'five_EisReviewed',
    DDAndLegalReviewedByAdvisor: 'five_EisAdvisor',
    DDAndLegalDateEISAASubmitted: 'five_EisSubmissionDate',
    DDAndLegalCompanyCompleted: 'five_DealSummaryDone',
    DDAndLegalDueDiligence: 'five_DdReviewed',
    DDAndLegalReviewedBy: 'five_DdReviewer',
    DDAndLegalDateReviewed: 'five_DdReviewDate',
    ICDateOfIC:"six_DateFinalIc",CommitteeInvestmentAmount:"six_InvestmentAmount",
    CommitteePreMoneyValuation:"six_Premoney",CommitteeTotalInvestmentAmount:"six_TotalRound",CommitteeEquityFinal:"six_EquityFinal",
    CommitteePriorreturn:"six_PriorReturn",CommitteeICDecision:"six_CommitteeDecision",
    CommitteeDecisionCriteria:"six_DecisionSupport",EISAAReceived:"seven_EisAssuranceReceived",
    EISDateEISAAReceived:"seven_DateEisReceived",EISIntroducedPortfolioTeam:"seven_PortfolioIntroduced",
    EISEngagedWithMarking:"seven_PrDone",EISLatestMangementAccounts:"seven_ReviewedManagementAccs",
    EISRequestedBibleOfFinal:"seven_FinalLegalBible",EISAgreedObserver:"seven_AgreedBoard",EISTwoPageDealSummarySent:"seven_SummarySent",
    CompletionDate:"eight_CompletionDate", completionEIS1SentDate:"eight_EisOneSentDate",
    completionEIS3ReceivedDate: "eight_EisThreeReceivedDate",
    completionEIS5SentDate:"eight_EisFiveSentDate",
    completionEIS5ReceivedDate:"eight_EisFiveReceivedDate",
    completionUploadedtoCoinvest: "eight_UploadedEisToPortal",
    completionSidecarInvestor1Name: "eight_SidecarInvestorOne",
    completionSidecarInvestor1Amount: "eight_SidecarInvestorOneAmount",
    completionSidecarInvestor1Transa: "eight_SidecarInvestorOneTransactionDate",
    completionSidecarInvestor1Comple: "eight_SidecarInvestorOneCompletionDate",
    completionSidecarInvestor1Equity: "eight_SidecarInvestorOneEquity",
    completionSidecarInvestor1Shares: "eight_SidecarInvestorOneShares",
    completionSidecarInvestor2Name: "eight_SidecarInvestorTwo",
    completionSidecarInvestor2Amount: "eight_SidecarInvestorTwoAmount",
    completionSidecarInvestor2Transa: "eight_SidecarInvestorTwoTransactionDate",
    completionSidecarInvestor2Comple: "eight_SidecarInvestorTwoCompletionDate",
    completionSidecarInvestor2Equity: "eight_SidecarInvestorTwoEquity",
    completionSidecarInvestor2Shares: "eight_SidecarInvestorTwoShares",
    completionVPInvestor1Name: "eight_VpInvestorOne",
    completionVPInvestor1Amount: "eight_VpInvestorOneAmount",
    completionVPInvestor1Transaction: "eight_VpInvestorOneTransactionDate",
    completionVPInvestor1CompletionD:"eight_VpInvestorOneCompletionDate",
    completionVPInvestor1Equity: "eight_VpInvestorOneEquity",
    completionVPInvestor1Shares: "eight_VpInvestorOneShares",
    completionVPInvestor2Name: "eight_VpInvestorTwo",
    completionVPInvestor2Amount: "eight_VpInvestorTwoAmount",
    completionVPInvestor2Transaction: "eight_VpInvestorTwoTransactionDate",
    completionVPInvestor2CompletionD:"eight_VpInvestorTwoCompletionDate",
    completionVPInvestor2Equity: "eight_VpInvestorTwoEquity",
    completionVPInvestor2Shares: "eight_VpInvestorTwoShares",
    completionVPInvestor3Name: "eight_VpInvestorThree",
    completionVPInvestor3Amount: "eight_VpInvestorThreeAmount",
    completionVPInvestor3Transaction: "eight_VpInvestorThreeTransactionDate",
    completionVPInvestor3CompletionD:"eight_VpInvestorThreeCompletionDate",
    completionVPInvestor3Equity: "eight_VpInvestorThreeEquity",
    completionVPInvestor3Shares: "eight_VpInvestorThreeShares",
    completionVPInvestor4Name: "eight_VpInvestorFour",
    completionVPInvestor4Amount: "eight_VpInvestorFourAmount",
    completionVPInvestor4Transaction: "eight_VpInvestorFourTransactionDate",
    completionVPInvestor4CompletionD:"eight_VpInvestorFourCompletionDate",
    completionVPInvestor4Equity: "eight_VpInvestorFourEquity",
    completionVPInvestor4Shares: "eight_VpInvestorFourShares",
    completionTranche1Fund: "eight_TrancheOneFund",
    completionTranche2Fund: "eight_TrancheTwoFund",
    completionTranche3Fund: "eight_TrancheThreeFund",
    completionTranche1Amount: "eight_TrancheOneAmount",
    completionTranche2Amount: "eight_TrancheTwoAmount",
    completionTranche3Amount: "eight_TrancheThreeAmount",
    completionTranche1TransactionDat: "eight_TrancheOneTransactionDate",
    completionTranche2TransactionDat: "eight_TrancheTwoTransactionDate",
    completionTranche3TransactionDat: "eight_TrancheThreeTransactionDate",
    completionTranche1CompletionDate: "eight_TrancheOneCompletionDate",
    completionTranche2CompletionDate: "eight_TrancheTwoCompletionDate",
    completionTranche3CompletionDate: "eight_TrancheThreeCompletionDate",
    completionTranche1Shares: "eight_TrancheOneShares",
    completionTranche2Shares: "eight_TrancheTwoShares",
    completionTranche3Shares: "eight_TrancheThreeShares",
    completionTranche1Equity: "eight_TrancheOneEquity",
    completionTranche2Equity: "eight_TrancheTwoEquity",
    completionTranche3Equity: "eight_TrancheThreeEquity",
    CurrentStageNumber: "opp_CurrentStage",
    MonitorReasonDropdown: "monitor_Dropdown",
    Notes: "monitor_Notes",
    Followup_date: "monitor_FollowupDate",
    Reason: "decline_Dropdown",
    DeclineReasoning: "decline_Rationale",
    Person_cancelling: "decline_PersonCancelling",
    Notified_pipeline: "decline_ToldFounders"



}

// Type mapping used to cleanse data
const typeMapping = {
one_OppName:"STRING", opp_Status:"STRING" ,one_PvLead:"STRING",opp_CurrentStage:"INTEGER",one_IntroDate:"DATEONLY",one_Introducer:"STRING",one_Referrer:"STRING",one_InvestmentAmount:"INTEGER",one_PreMoney:"INTEGER",one_TotalInvestment:"INTEGER",one_EquityPercentage:"FLOAT",one_Location:"STRING",one_Sector:"STRING",one_InvestmentStage:"STRING",one_InvestmentToDate:"INTEGER",one_Activity:"STRING",one_TargetCustomers:"STRING",
two_NdaSigned:"BOOLEAN", two_TeamMembers:"STRING",three_CompanyDescription:"MULTILINE",
three_PvSplit:"INTEGER",three_VpSplit:"INTEGER",three_FundAllocation:"INTEGER", three_proposalSentDateTeam: "DATEONLY",
    three_ProposalSentDateIc: "DATEONLY",
    three_IcMeetingDate: "DATEONLY",
    three_IcApproved:"BOOLEAN",
    four_PvInvestmentAmount:"INTEGER",
    four_PremoneyValuation: "INTEGER",
    four_TotalRoundAmount: "INTEGER",
    four_NonDilutedEquity: "FLOAT",
    //TODO check that this should be a string
    four_FullyDilutedEquity: "STRING",
    four_PriorReturn:"BOOLEAN",
    four_expectedCompletionDate: "DATEONLY",
    four_OfferTeamReviewer: "STRING",
    four_OfferReviewedDate: "DATEONLY",
    four_OfferIcReviewer: "STRING",
    four_OfferIcApprovedDate: "DATEONLY",
    four_OfferSentDate: "DATEONLY",
    five_financialExternalProviderEngaged:"BOOLEAN",five_financialSummary:"STRING",five_lawyersUsed:"STRING",
    five_LegalFee:"INTEGER",five_CompanyLawyer:"STRING",five_LegalSummary:"STRING",five_ArticlesSummary:"STRING",
    five_IaSummary:"STRING",five_CovenantSummary:"STRING",five_CddUsed:"STRING",five_CddFee:"INTEGER",five_CddSummary:"STRING",
    five_MddExternalProviderEngaged:"BOOLEAN",five_MddProvider:"STRING",five_MddFee:"INTEGER",five_MgtReferencesDone:"BOOLEAN",
    five_MddSummary:"STRING",five_KycConfirmedSignificantHolders:"BOOLEAN",five_KycDateCompleted:"DATEONLY",five_EisReviewed:"BOOLEAN",
    five_EisAdvisor:"STRING",five_EisSubmissionDate:"DATEONLY",five_DealSummaryDone:"BOOLEAN",five_DdReviewed:"BOOLEAN",
    five_DdReviewer:"STRING",five_DdReviewDate:"DATEONLY", six_DateFinalIc:"DATEONLY",six_InvestmentAmount:"INTEGER",six_Premoney:"INTEGER",six_TotalRound:"INTEGER",
    six_EquityFinal:"FLOAT",six_PriorReturn:"BOOLEAN",six_CommitteeDecision:"STRING",six_DecisionSupport:"STRING",
    seven_EisAssuranceReceived:"BOOLEAN",seven_DateEisReceived:"DATEONLY",seven_PortfolioIntroduced:"BOOLEAN",
    seven_PrDone:"BOOLEAN",seven_ReviewedManagementAccs:"BOOLEAN",seven_FinalLegalBible:"BOOLEAN",seven_AgreedBoard:"BOOLEAN",
    seven_SummarySent:"BOOLEAN", eight_CompletionDate: "DATEONLY",eight_EisOneSentDate: "DATEONLY",
    eight_EisThreeReceivedDate: "DATEONLY",
    eight_EisFiveSentDate: "DATEONLY", eight_EisFiveReceivedDate: "DATEONLY",
    eight_UploadedEisToPortal: "BOOLEAN", eight_SidecarInvestorOne:"STRING",
    eight_SidecarInvestorOneAmount:"FLOAT",
    eight_SidecarInvestorOneTransactionDate:"DATEONLY",
    eight_SidecarInvestorOneCompletionDate: "DATEONLY",
    eight_SidecarInvestorOneEquity:"FLOAT",
    eight_SidecarInvestorOneShares: "INTEGER",
    eight_SidecarInvestorTwo:"STRING",
    eight_SidecarInvestorTwoAmount:"FLOAT",
    eight_SidecarInvestorTwoTransactionDate:"DATEONLY",
    eight_SidecarInvestorTwoCompletionDate: "DATEONLY",
    eight_SidecarInvestorTwoEquity:"FLOAT",
    eight_SidecarInvestorTwoShares: "INTEGER",
    eight_VpInvestorOne: "STRING",
    eight_VpInvestorOneAmount: "FLOAT",
    eight_VpInvestorOneTransactionDate: "DATEONLY",
    eight_VpInvestorOneCompletionDate:"DATEONLY",
    eight_VpInvestorOneEquity: "FLOAT",
    eight_VpInvestorOneShares: "INTEGER",
    eight_VpInvestorTwo: "STRING",
    eight_VpInvestorTwoAmount: "FLOAT",
    eight_VpInvestorTwoTransactionDate: "DATEONLY",
    eight_VpInvestorTwoCompletionDate:"DATEONLY",
    eight_VpInvestorTwoEquity: "FLOAT",
    eight_VpInvestorTwoShares: "INTEGER",
    eight_VpInvestorThree: "STRING",
    eight_VpInvestorThreeAmount: "FLOAT",
    eight_VpInvestorThreeTransactionDate: "DATEONLY",
    eight_VpInvestorThreeCompletionDate:"DATEONLY",
    eight_VpInvestorThreeEquity: "FLOAT",
    eight_VpInvestorThreeShares: "INTEGER",
    eight_VpInvestorFour: "STRING",
    eight_VpInvestorFourAmount: "FLOAT",
    eight_VpInvestorFourTransactionDate: "DATEONLY",
    eight_VpInvestorFourCompletionDate:"DATEONLY",
    eight_VpInvestorFourEquity: "FLOAT",
    eight_VpInvestorFourShares: "INTEGER",
    eight_TrancheOneFund: "STRING",
    eight_TrancheTwoFund: "STRING",
    eight_TrancheThreeFund: "STRING",
    eight_TrancheOneAmount: "FLOAT",
    eight_TrancheTwoAmount: "FLOAT",
    eight_TrancheThreeAmount: "FLOAT",
    eight_TrancheOneTransactionDate: "DATEONLY",
    eight_TrancheTwoTransactionDate: "DATEONLY",
    eight_TrancheThreeTransactionDate: "DATEONLY",
    eight_TrancheOneCompletionDate: "DATEONLY",
    eight_TrancheTwoCompletionDate: "DATEONLY",
    eight_TrancheThreeCompletionDate: "DATEONLY",
    eight_TrancheOneShares: "INTEGER",
    eight_TrancheTwoShares: "INTEGER",
    eight_TrancheThreeShares: "INTEGER",
    eight_TrancheOneEquity: "FLOAT",
    eight_TrancheTwoEquity: "FLOAT",
    eight_TrancheThreeEquity: "FLOAT",
    decline_Dropdown: "STRING",
    decline_Rationale:"MULTILINE",
    decline_PersonCancelling: "STRING",
    decline_ToldFounders: "BOOLEAN",
    monitor_Dropdown: "STRING",
    monitor_Notes: "MULTILINE",
    monitor_FollowupDate: "DATEONLY"


}
// TODO two_teamMembers is has a number of weird seperators in the string





function remapData(obj) {
    Object.keys(obj).forEach((key) => {
        let value = obj[key]
        if(Object.keys(fieldMapping).includes(key)) {
            obj[fieldMapping[key]] = value;
            delete obj[key];
        } else {
            delete obj[key];
            
        }
    });

}

// readyData.forEach((obj) => {
//
//     remapData(obj);
//     cleanseData(obj);
//
//
//
//
//
// });
// console.log(readyData);



function cleanseData(obj) {
    for (key in obj) {
        if (typeMapping[key] === "DATEONLY") {
            let value = obj[key];

            if (/\d{1,2}\/\d{1,2}\/\d{2,4}/.test(value)) {
                obj[key] = moment(value, "DD-MM-YYYY")

            } else {
                obj[key] = null;

            }


        } else if (typeMapping[key] === "INTEGER") {

            let value = obj[key];
            if (value === "" || value === "NaN" || value === "undefined" || value === null) {
                value = null;
                obj[key] = value;
            } else {
                obj[key] = (numeral(value).value() === null) ? null : numeral(value).value();
            }
        } else if (typeMapping[key] === "FLOAT") {
            let value = obj[key];
            if (value === "" || value === "NaN" || value === "undefined" || value === null) {
                value = null;
                obj[key] = value;
            } else {
                obj[key] = (numeral(value).value() === null) ? null : numeral(value).value();
            }
        } else if (typeMapping[key] === "BOOLEAN") {
            // console.log(`${obj[key]} is a radio button`);
        } else if (typeMapping[key] === "MULTILINE") {
            if (obj[key] !== null){
                let value = String(obj[key]);
                if(/\r?\n|\r/.test(value)) {
                    
                    let replacement = value.replace(/\r?\n|\r/g," ");
                    obj[key] = replacement;
                    
                }
                
            }
            
        }

    }
    
}

//Populate DB
// console.log(readyData.length)
// dbController.dbController.populateDB(readyData, Opportunity);

// module.exports.readyData = readyData;
module.exports.opportunity = Opportunity;
module.exports.typeMapping = typeMapping;















