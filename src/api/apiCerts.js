export default async function fetchCerts() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        id: "depaul",
        name: "Bachelor of Science: Computer Science",
        org: "DePaul University",
        link:
          "https://offices.depaul.edu/depaul-central/records/digital-credentials/Pages/ediploma-validation.aspx",
        picture:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/Certs/diploma.JPG",
        issue_date: "August 2020",
      },
      {
        id: "csa",
        name: "ServiceNow Certified System Administrator",
        org: "ServiceNow",
        link:
          "https://account.servicenow.com/personal-data/11eb22a72/a17be8295/e30620d88/16d904WN7/resume.html",
        picture:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/Certs/CSA.JPG",
        issue_date: "November 2021",
      },
      {
        id: "itil4",
        name: "ITIL® Foundation Certificate in IT Service Management",
        org: "AXELOS Global Best Practice",
        link:
          "https://account.servicenow.com/personal-data/11eb22a72/a17be8295/e30620d88/16d904WN7/resume.html",
        picture:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/Certs/ITIL.JPG",
        issue_date: "May 2021",
      },
    ])
  );
}
