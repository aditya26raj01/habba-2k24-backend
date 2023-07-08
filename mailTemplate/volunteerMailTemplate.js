import moment from "moment";
import renderDepartments from "../resources/departments.js";

const col = {
    "AIT":"Acharya Institute of Technology",
    "ANRVASA":"Acharya's NRV School of Architecture",
    "ABMRCP":"Acharya & B.M. Reddy College of Pharmacy",
    // "ASM":"Acharya School of Management",
    "AP":"Acharya Polytechnic",
    "AIGS":"Acharya Institute of Graduate Studies",
    "SNSN":"Smt. Nagarathnamma School of Nursing",
    "SNCN":"Smt. Nagarathnamma College of Nursing",
    // "ASE":"Acharya College of Education",
    // "APC",college:"Acharya Pre-University College",
    "AIEFL":"Acharya Institute of English and Foriegn Languages",
    "ASD":"Acharya School of Design",
    "AIAS":"Acharya Institute of Allied Health Science",
    "AIP":"Acharya's NR Institute of Physiotheraphy",
    "OTH":"Others"
}

const volunteerMailTemplate = (user) => {
    let collegeName = col[user.college];
    let departmentName = null;
    let departmentArray = renderDepartments(user.college);
    for (var i = 0; i < departmentArray.length; i++) {
        if (user.department === departmentArray[i].value) {
            departmentName = departmentArray[i].department;
            break;
        }
    }
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css" />
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            .background {
                background-color: #B8CCE2;
                padding: 60px 0;
            }
    
            .card {
                max-width: 600px;
                margin: 0 auto;
                font-family: Arial, Helvetica, sans-serif;
            }
    
            .card-top {
                background-color: #FFD500;
                text-align: center;
                color: #555555;
                font-weight: bold;
                padding: 10px 0;
                font-size: 1.5rem;
            }
    
            .card-mid {
                background-color: #ffffff;
                color: #132F40;
                padding-bottom: 40px;
            }
    
            .card-mid-top {
                padding: 40px;
                padding-bottom: 0;
            }
    
            .card-bottom {
                background-color: #132F40;
                color: #F8F8F8;
                padding: 20px;
                padding-bottom: 15px;
            }
            .card-bottom div{
                margin-bottom: 5px;
            }
    
            .card-heading {
                font-size: 1.5rem;
                margin-bottom: 20px;
            }
    
            .user-name {
                font-weight: bold;
            }
            .card-text-wrapper p{
                margin-top: 20px;
                color: #132F40;
            }
    
            .registered-data {
                max-width: 100%;
                border: 1px solid rgb(219, 219, 219);
                border-collapse: collapse;
                margin: 0px 30px;
                margin-top: 20px;
            }
    
            .dark-bg {
                background-color: #d9d9d9;
            }
            .registered-data div{
                display: flex;
            }
            .registered-data div span{
                display: inline-block;
                width: 50%;
                padding: 8px 5px;
                text-align: left;
                word-break: break-all;
                color: #132F40;
                font-weight: 500;
            }
    
            .cprd{
                font-weight: bold;
            }
    
            .habba{
                color: #132F40;
                font-weight: bold;
                text-align: right;
                margin-bottom: 20px;
            }
    
            @media(max-width: 640px) {
                .card-mid-top{
                    padding: 20px;
                    padding-bottom: 0;
                }
                .registered-data{
                    font-size: small;
                    margin: 0 10px;
                    margin-top: 20px;
                }
                .user-name-wrapper {
                    display: block;
                }
                .card-mid{
                    padding-bottom: 20px;
                }
                .card-text-wrapper{
                    font-size: small;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="background">
            <div class="card">
                <div class="card-top">Volunteer @ Habba</div>
                <div class="card-mid">
                    <div class="card-mid-top">
                        <div class="habba">🐯 HABBA 2024</div>
                        <div class="card-heading"><span class="user-name-wrapper">Hey <span
                                    class="user-name">${user.name}</span>,</span> registration complete.</div>
                        <h3>Kudos!</h3>
                        <div class="card-text-wrapper">
                            <p>You have successfully registered as a volunteer for <strong>Habba 2024</strong>.</p>
                            <p>Your application is under review, please be patient till the process is complete.</p>
                            <p>Here's a copy of the Response submitted by you, <span class="cprd">if any Discrepency is found contact <strong>HABBA'24 Tech Team</strong> or mail us on <a href = "mailto:acharyahabba@acharya.ac.in">acharyahabba@acharya.ac.in</a></span></p>
                        </div>
                    </div>
                    <div class="registered-data">
                        <div class="dark-bg">
                            <span>Volunteer ID</span>
                            <span>${user.id}</span>
                        </div>
                        <div>
                            <span>Name</span>
                            <span>${user.name}</span>
                        </div>
                        <div class="dark-bg">
                            <span>AUID</span>
                            <span>${user.auid}</span>
                        </div>
                        <div>
                            <span>Email</span>
                            <span>${user.email}</span>
                        </div>
                        <div class="dark-bg">
                            <span>College</span>
                            <span>${collegeName}</span>
                        </div>
                        <div>
                            <span>Branch</span>
                            <span>${departmentName}</span>
                        </div>
                        <div class="dark-bg">
                            <span>Team Preference 1</span>
                            <span>${user.pref1.charAt(0).toUpperCase() + user.pref1.slice(1)}</span>
                        </div>
                        <div>
                            <span>Team Preference 2</span>
                            <span>${user.pref2.charAt(0).toUpperCase() + user.pref2.slice(1)}</span>
                        </div>
                        <div class="dark-bg">
                            <span>DOB</span>
                            <span>${moment(user.dob).format('DD-MM-YYYY')}</span>
                        </div>
                        <div>
                            <span>Whatsapp</span>
                            <span>${user.whatsapp}</span>
                        </div>
                        <div class="dark-bg">
                            <span>Contact</span>
                            <span>${user.call}</span>
                        </div>
                        <div>
                            <span>Gender</span>
                            <span>${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</span>
                        </div>
                    </div>
                </div>
                <div class="card-bottom">
                    <div>Acharya Habba 2024</div>
                    <div>Acharya Institutes, Bengaluru</div>
                </div>
    
            </div>
        </div>
    </body>
    
    </html>`
}

export default volunteerMailTemplate;