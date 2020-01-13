
//Values for key array
const keyValues = `
DDAndLegalComplimentInternalReview
DDAndLegalSummaryComments
DDAndLegalLawyerAppointed
DDAndLegalLawyerFee
DDAndLegalCompanyLawyer
DDAndLegalLDDSummary
DDAndLegalArticlesSummary
DDAndLegalAgreementSummary
DDAndLegalInvestorCovenantSummary
DDAndLegalCDDAppointed
DDAndLegalCDDFee
DDAndLegalCDDSummary
DDAndLegalProviderAppointed
DDAndLegalWhoAppointed
DDAndLegalMDDFee
DDAndLegaRreferenceUndertaken
DDAndLegalMDDSummary
DDAndLegalKYCConfirmed
DDAndLegalKYCCompleted
DDAndLegalEISAAReviewed
DDAndLegalReviewedByAdvisor
DDAndLegalDateEISAASubmitted
DDAndLegalCompanyCompleted
DDAndLegalDueDiligence
DDAndLegalReviewedBy
DDAndLegalDateReviewed

`;

//values for value array

const values = `
five_financialExternalProviderEngaged
five_financialSummary
five_lawyersUsed
five_LegalFee
five_CompanyLawyer
five_LegalSummary
five_ArticlesSummary
five_IaSummary
five_CovenantSummary
five_CddUsed
five_CddFee
five_CddSummary
five_MddExternalProviderEngaged
five_MddProvider
five_MddFee
five_MgtReferencesDone
five_MddSummary
five_KycConfirmedSignificantHolders
five_KycDateCompleted
five_EisReviewed
five_EisAdvisor
five_EisSubmissionDate
five_DealSummaryDone
five_DdReviewed
five_DdReviewer
five_DdReviewDate


`






function mapper(keyArr, valArr) {
    const mapping = {};
    keyArr.forEach((item, index) => {
        mapping[keyArr[index]] = valArr[index]
    })

    return mapping;
}



function arrayMaker(str){

    let arr = str.split(/\r?\n/)

    return arr
}



const keyArr = arrayMaker(keyValues);
const valArr = arrayMaker(values);

console.log(mapper(keyArr, valArr));