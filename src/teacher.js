/*
* Lấy dữ liệu
* Author: LTVU (13/12/2022)
*/


// Load dữ liệu
function loadData()
{
    try {
        $.ajax({
            type: "GET",
            url: "https://amis.manhnv.net/api/v1/Employees",
            success: function (response) {
                for (const emp of response) {
                    var employeeCode = emp.EmployeeCode;
                    var employeeName = emp.EmployeeName;
                    var phoneNumber = emp.PhoneNumber;
                    var divHTML =   `<div class="page-row">
                                        <div class="check"></div>
                                        <div class="teacher-code">${employeeCode}</div>
                                        <div class="teacher-name">${employeeName}</div>
                                        <div class="phone-number">${phoneNumber}</div>
                                        <div class="specialize"></div>
                                        <div class="subject"></div>
                                        <div class="room"></div>
                                        <div class="training"></div>
                                        <div class="working"></div>
                                        <div class="manager"></div>
                                    </div>`;
                    $(".main-page").append(divHTML);                 
                }
            },
            error: function(error){
               
            }
        });
    } catch (error) {
        
    }
    
}

function createEvent(){
    loadData();
}

createEvent();