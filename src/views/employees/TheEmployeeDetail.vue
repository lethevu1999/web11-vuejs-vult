<template>
    <div class="dialog-container">
        <div class="dialog-add">
            <div class="dialog-add-container">
                <div class="dialog-left">
                    <div class="dialog-employee-img">
                        <div class="dialog-employee-img-add">Chọn ảnh</div>
                    </div>
                    <div class="dialog-employee-name binding-name">{{ newEmployee.EmployeeName }}</div>
                    <div class="dialog-employee-code binding-code">{{ newEmployee.EmployeeCode }}</div>

                </div>
                <div class="dialog-line"></div>
                <div class="dialog-right">
                    <div class="dialog-right-header">
                        <div class="dialog-name">Sửa hồ sơ Cán bộ, giáo viên</div>
                        <div @click="closeDialog" class="dialog-close-button cursor-pointer"></div>
                    </div>
                    <div class="dialog-right-body">
                        <div class="dialog-el-1">
                            <div>Số hiệu cán bộ</div>
                            <p class="color-red">*</p>
                        </div>
                        <div class="dialog-el-2">
                            <input v-model="newEmployee.EmployeeCode" id="txtEmployeeCode" ref="txtEmployeeCode"
                                class="dialog-input text-input" style="width: 100%" type="text" placeholder="NV0001">
                            <div class="dialog-el-2-error dialog-el-right--error">
                                Số hiệu cán bộ không được bỏ trống
                            </div>
                        </div>
                        <div class="dialog-el-3 dialog-el__marrgin">
                            <div>Họ và tên</div>
                            <p class="color-red">*</p>
                        </div>
                        <div class="dialog-el-0">
                            <input v-model="newEmployee.EmployeeName" id="txtEmployeeName"
                                class="dialog-input text-input" style="width: 100%" type="text"
                                placeholder="Nguyễn Văn A">
                            <div class="dialog-el-0-error dialog-el-left--error">
                                Họ và tên không được bỏ trống
                            </div>
                        </div>
                        <div class="dialog-el-4">Số điện thoại</div>
                        <div class="dialog-el-5" style="position: relative">
                            <input v-model="newEmployee.PhoneNumber" class="dialog-input text-input" style="width: 100%"
                                type="text" id="txtEmployeeMobie" placeholder="0987654321">
                        </div>
                        <div class="dialog-el-6 dialog-el__marrgin">Email</div>
                        <input v-model="newEmployee.Email" class="dialog-el-7 dialog-input text-input" type="text" id="txtEmployeeEmail"
                            placeholder="annv@gmail.com">
                        <div class="dialog-el-8">Tổ bộ môn</div>
                        <div class="dialog-el-9">
                            <div class="dialog-el-9-select dialog-input text-input">
                                <span class="">Tổ bộ môn</span>
                                <img src="../../assets/icons/ic_Chevron.png" width="25" height="25">
                            </div>
                            <div class="dialog-el-9-list">
                                <div class="dialog-el-9-list-item">Tổ Toán - Tin</div>
                                <div class="dialog-el-9-list-item">Tổ Lý - Hóa</div>
                                <div class="dialog-el-9-list-item">Tổ Sinh-Sử-Địa</div>
                                <div class="dialog-el-9-list-item">Tổ Anh văn</div>
                                <div class="dialog-el-9-list-item">Tổ Ngữ văn</div>
                                <div class="dialog-el-9-list-item">Tổ Văn phòng</div>
                            </div>
                        </div>
                        <div class="dialog-el-10 dialog-el__marrgin">QL theo môn</div>
                        <div class="dialog-el-11">
                            <div class="dialog-el-11-select dialog-input">
                                <div value="abc" class="dialog-el-11-select-content">
                                    <span class="dialog-el-11-select-content-first">QL theo môn</span>
                                </div>
                                <img src="../../assets/icons/ic_Chevron.png" width="25" height="25">
                            </div>
                            <div class="dialog-el-11-list">
                                <div class="dialog-el-11-list-item dialog-el-11-list-item-header">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Tất cả</span>
                                </div>
                                <div class="dialog-el-11-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Toán</span>
                                </div>
                                <div class="dialog-el-11-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Lý</span>
                                </div>
                                <div class="dialog-el-11-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Hóa</span>
                                </div>
                                <div class="dialog-el-11-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Sinh</span>
                                </div>
                                <div class="dialog-el-11-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Ngữ văn</span>
                                </div>
                                <div class="dialog-el-11-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Lịch sử</span>
                                </div>
                            </div>
                        </div>
                        <div class="dialog-el-12">QL kho, phòng</div>
                        <div class="dialog-el-13">
                            <div class="dialog-el-13-select dialog-input select-input">
                                <div class="dialog-el-13-select-content">
                                    <span class="dialog-el-13-select-content-first">QL kho, phòng</span>
                                </div>
                                <img src="../../assets/icons/ic_Chevron.png" width="25" height="25">
                            </div>
                            <div class="dialog-el-13-list">
                                <div class="dialog-el-13-list-item dialog-el-13-list-item-header">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Tất cả</span>
                                </div>
                                <div class="dialog-el-13-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Phòng Toán-Lý</span>
                                </div>
                                <div class="dialog-el-13-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Phòng Hóa-Sinh</span>
                                </div>
                                <div class="dialog-el-13-list-item">
                                    <img src="../../assets/icons/ic_Checkbox_Inactive.png" width="25" height="25">
                                    <span class="">Kho phòng chung</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dialog-right-body-checkbox">
                        <input type="checkbox" class="dialog-checkbox">
                        <div class="checkbox-1-content">Trình độ nghiệp vụ QLTB</div>
                        <div class="dialog-right-body-checkbox-right">
                            <input type="checkbox" class="dialog-checkbox">
                            <div class="check-box-2-content">Đang làm việc</div>
                        </div>
                    </div>
                    <div class="dialog-right-footer">
                        <button @click="closeDialog" class="dialog-button dialog-button-close cursor-pointer">
                            Đóng
                        </button>
                        <button @click="btnSaveOnClick" id="dialog-button-save" class="dialog-button cursor-pointer">
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="toast-message-container">
            <div class="toast-message">
                <div class="toast-message-left">
                    <div class="toast-message-img"></div>
                    <div class="toast-message-text">
                        <div class="toast-message-title">Lỗi</div>
                        <div class="toast-message-content"></div>
                    </div>
                </div>
                <div class="toast-message-close"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "TheEmployeeDetail",
    props: ["employee", "employeeId"],
    created() {
        //C1: chuyển prop employee sang data
        //this.newEmployee = this.employee;

        //C2: lấy dữ liệu từ Server dựa vào EmployeeId

        if (!this.isEmptyValue(this.employeeId)) {
            axios.get(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`)
                .then(res => {
                    this.newEmployee = res.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },

    methods:
    {
        /**
        * Hàm hiển thị dialog gọi từ parent component
        * Author: LTVu (21/12/2022)
        */
        closeDialog() {
            this.$emit("onClose");
        },

        /**
         * Hàm lưu lại thông tin nhân viên
         * Author: LTVu (21/12/2022)
         */
        btnSaveOnClick() {
            const me = this
            try {
                //Validate dữ liệu
                if (this.isValidateData()) {
                    // gọi api sửa dữ liệu:
                    axios.put(`https://amis.manhnv.net/api/v1/Employees/${me.employeeId}`, me.newEmployee)
                        .then((res) => {
                            alert("Thành công");
                            me.closeDialog();
                            me.$emit("loadData");
                            console.log(res);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            } catch (error) {
                console.log(error);
            }

        },
        /**
         * Hàm validate dữ liệu
         * Author: LTVu (21/12/2022)
         */
        isValidateData() {
            try {
                var errorMsgs = [];
                //Số hiệu cán bộ không được rỗng
                if (this.isEmptyValue(this.newEmployee.EmployeeCode)) {
                    errorMsgs.push("Mã nhân viên không được phép rỗng");
                }

                //Họ và tên không được phép rỗng
                if (this.isEmptyValue(this.newEmployee.EmployeeName)) {
                    errorMsgs.push("Họ và tên không được phép rỗng");
                }

                if (errorMsgs.length > 0) {
                    //Hiển thị cảnh báo lỗi

                    //trả về false
                    return false;
                }
                else {
                    return true;
                }
            } 
            catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm kiểm tra dữ liệu rỗng hay không
         * Author: LTVu (21/12/2022)
         */
        isEmptyValue(value) {
            try {
                if (value == "" || value == null || value == undefined) {
                    return true;
                }
                else {
                    return false;
                }

            } catch (error) {
                console.log(error);
            }
        }
    },
    data() {
        return {
            newEmployee: {}
        }
    }
}
</script>

<style scoped>
@import url(../../css/layout/dialog-add.css);
@import url(../../css/layout/combobox.css);
</style>