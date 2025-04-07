<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const leaveApplication = ref({
  applicationNumber: "25402208421351170",
  studentInfo: {
    studentId: "202120153",
    name: "曹谈睿",
    idNumber: "231182200401014519",
    department: "禁毒与治安学院",
    team: "禁毒与治安大队四中队",
    phone: "18940171686",
  },
  leaveReason: "塔湾拍照",
  leaveTime: "2025-04-02 12:00 -- 2025-04-02 14:00",
  approvalTeamLeader: "海志超",
  status: "审批中",
  processList: [
    {
      taskNode: "服务发起人",
      operator: "曹谈睿",
      opinion: "",
      result: "提交申请",
      time: "2025-04-02 08:44:49",
    },
    {
      taskNode: "中队长审批",
      operator: "海志超",
      opinion: "集合前回",
      result: "回退",
      time: "2025-04-02 08:44:59",
    },
    {
      taskNode: "中队长审批",
      operator: "海志超",
      opinion: "",
      result: "同意",
      time: "2025-04-02 08:44:59",
    },
    {
      taskNode: "任务发起人",
      operator: "曹谈睿",
      opinion: "收到",
      result: "提交",
      time: "2025-04-02 08:44:59",
    },
  ],
});

// 创建弹窗显示状态
const showModal = ref(false);

// 创建编辑表单数据
const editForm = ref({
  studentId: leaveApplication.value.studentInfo.studentId,
  name: leaveApplication.value.studentInfo.name,
  phone: leaveApplication.value.studentInfo.phone,
  leaveReason: leaveApplication.value.leaveReason,
  leaveTime: leaveApplication.value.leaveTime,
  approvalTeamLeader: leaveApplication.value.approvalTeamLeader,
  lastProcessor:
    leaveApplication.value.processList[
      leaveApplication.value.processList.length - 1
    ].operator,
  lastProcessTime:
    leaveApplication.value.processList[
      leaveApplication.value.processList.length - 1
    ].time,
});

const isDetailsExpanded = ref(true);
const isApplicationExpanded = ref(true);

const toggleDetails = () => {
  isDetailsExpanded.value = !isDetailsExpanded.value;
};

const toggleApplication = () => {
  isApplicationExpanded.value = !isApplicationExpanded.value;
};

const toggleFlow = () => {
  // Implementation for toggling flow
};

// 打开弹窗
const openModal = () => {
  showModal.value = true;
};

// 关闭弹窗
const closeModal = () => {
  showModal.value = false;
};

// 保存修改
const saveChanges = () => {
  // 更新学生信息
  leaveApplication.value.studentInfo.studentId = editForm.value.studentId;
  leaveApplication.value.studentInfo.name = editForm.value.name;
  leaveApplication.value.studentInfo.phone = editForm.value.phone;

  // 更新请假信息
  leaveApplication.value.leaveReason = editForm.value.leaveReason;
  leaveApplication.value.leaveTime = editForm.value.leaveTime;
  leaveApplication.value.approvalTeamLeader = editForm.value.approvalTeamLeader;

  // 更新最后一条处理记录
  const lastProcess =
    leaveApplication.value.processList[
      leaveApplication.value.processList.length - 1
    ];
  lastProcess.operator = editForm.value.lastProcessor;
  lastProcess.time = editForm.value.lastProcessTime;

  // 关闭弹窗
  closeModal();
};
</script>

<template>
  <div class="page">
    <div class="header">
      <div class="back">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
        <span>返回</span>
      </div>
      <div class="title">网上办事大厅</div>
      <div class="right-icon">
        <font-awesome-icon icon="fa-solid fa-th" />
      </div>
    </div>

    <div class="content">
      <div class="page-title">
        <h2>
          <font-awesome-icon icon="fa-solid fa-eye" />
          事项查看（请假单—本科生）
        </h2>
      </div>
      <div class="container">
        <div class="application-number">
          申请编号：{{ leaveApplication.applicationNumber }}
        </div>

        <div class="section">
          <div class="title">
            <span>办理流程</span>
            <a class="arr-fold-box" @click="toggleFlow">
              <span class="hide_one">展开</span>
              <font-awesome-icon
                icon="fa-solid fa-angle-down"
                class="push-left-5"
              />
            </a>
          </div>
        </div>

        <div class="section">
          <div class="title">
            <span>办理详情</span>
            <a class="arr-fold-box" @click="toggleDetails">
              <span class="hide_one">{{
                isDetailsExpanded ? "收起" : "展开"
              }}</span>
              <font-awesome-icon
                :icon="
                  isDetailsExpanded
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                "
                class="push-left-5"
              />
            </a>
          </div>

          <div class="process-table" v-if="isDetailsExpanded">
            <!-- 使用 v-for 遍历 processList 数据 -->
            <table
              v-for="(process, index) in leaveApplication.processList"
              :key="index"
            >
              <tr>
                <td class="label">任务环节</td>
                <td class="value">{{ process.taskNode }}</td>
              </tr>
              <tr>
                <td class="label">办理人</td>
                <td class="value">{{ process.operator }}</td>
              </tr>
              <tr>
                <td class="label">办理意见</td>
                <td class="value">{{ process.opinion }}</td>
              </tr>
              <tr>
                <td class="label">办理结果</td>
                <td class="value">{{ process.result }}</td>
              </tr>
              <tr>
                <td class="label">办理时间</td>
                <td class="value">{{ process.time }}</td>
              </tr>
            </table>
          </div>
        </div>

        <!-- 申请表单部分 -->
        <div class="section">
          <div class="title">
            <span>申请表单</span>
            <a class="arr-fold-box" @click="toggleApplication">
              <span class="hide_one">{{
                isApplicationExpanded ? "收起" : "展开"
              }}</span>
              <font-awesome-icon
                :icon="
                  isApplicationExpanded
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                "
                class="push-left-5"
              />
            </a>
          </div>

          <div class="application-form" v-if="isApplicationExpanded">
            <table class="form-table">
              <tr class="title-row">
                <td>学号</td>
              </tr>
              <tr class="value-row">
                <td>202120153</td>
              </tr>
              <tr class="title-row">
                <td>姓名</td>
              </tr>
              <tr class="value-row">
                <td>曹谈睿</td>
              </tr>
              <tr class="title-row">
                <td>身份证号</td>
              </tr>
              <tr class="value-row">
                <td>231182200401014519</td>
              </tr>
              <tr class="title-row">
                <td>所在部门</td>
              </tr>
              <tr class="value-row">
                <td>{{ leaveApplication.studentInfo.department }}</td>
              </tr>
              <tr class="title-row">
                <td>所在中队</td>
              </tr>
              <tr class="value-row">
                <td>{{ leaveApplication.studentInfo.team }}</td>
              </tr>
              <tr class="title-row">
                <td>联系电话</td>
              </tr>
              <tr class="value-row">
                <td>{{ leaveApplication.studentInfo.phone }}</td>
              </tr>
              <tr class="title-row">
                <td>请假事由</td>
              </tr>
              <tr class="value-row">
                <td>{{ leaveApplication.leaveReason }}</td>
              </tr>
              <tr class="title-row">
                <td>请假时间</td>
              </tr>
              <tr class="value-row">
                <td>{{ leaveApplication.leaveTime }}</td>
              </tr>
              <tr class="title-row">
                <td>审批中队长</td>
              </tr>
              <tr class="value-row">
                <td>
                  {{ leaveApplication.approvalTeamLeader }}
                  <span class="notice">注：选择本人中队长审批。</span>
                </td>
              </tr>
              <tr class="title-row">
                <td>上传请假材料</td>
              </tr>
              <tr class="value-row">
                <td>
                  <button class="upload-btn">
                    <font-awesome-icon
                      icon="fa-solid fa-upload"
                      class="upload-icon"
                    />
                    上传请假材料
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="action-buttons">
          <button class="export-btn">
            <font-awesome-icon
              icon="fa-solid fa-download"
              class="download-icon"
            />
            导出
          </button>

          <button class="return-btn" @click="openModal">返回</button>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="copyright">中国刑事警察学院 版权所有 Copyright © 2025</div>
    </div>

    <!-- 弹窗组件 -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>修改表单信息</h3>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>学号</label>
            <input type="text" v-model="editForm.studentId" />
          </div>
          <div class="form-group">
            <label>姓名</label>
            <input type="text" v-model="editForm.name" />
          </div>
          <div class="form-group">
            <label>联系电话</label>
            <input type="text" v-model="editForm.phone" />
          </div>
          <div class="form-group">
            <label>请假事由</label>
            <input type="text" v-model="editForm.leaveReason" />
          </div>
          <div class="form-group">
            <label>请假时间</label>
            <input type="text" v-model="editForm.leaveTime" />
          </div>
          <div class="form-group">
            <label>审批中队长</label>
            <input type="text" v-model="editForm.approvalTeamLeader" />
          </div>
          <div class="form-group">
            <label>最近办理人</label>
            <input type="text" v-model="editForm.lastProcessor" />
          </div>
          <div class="form-group">
            <label>办理时间</label>
            <input type="text" v-model="editForm.lastProcessTime" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="closeModal">取消</button>
          <button class="save-btn" @click="saveChanges">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial, sans-serif;
}

.header {
  background-color: #0072bd;
  background-image: url("http://i.cipuc.edu.cn/tp_fp/resource/image/common/head-blue-bg.png");
  background-size: cover;
  background-position: center;
  color: white;
  height: 50px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .back {
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    left: 10px;
  }

  .title {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }

  .right-icon {
    font-size: 20px;
    color: white;
  }
}

.content {
  padding: 0 0 10px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial, sans-serif;
  font-size: 14px;
  color: #333;
  position: relative;

  .page-title {
    h2 {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 10px;
      font-size: 18px;
      font-weight: 500;
      color: #444;
    }

    .fa-eye {
      color: #444;
    }
  }
}

.container {
  background-color: #fff;
  border-top: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  padding: 10px;

  .application-number {
    background: white;
    padding: 10px 0;
    border-radius: 8px;
    margin-bottom: 15px;
    text-align: right;
  }

  .section {
    background: white;
    border-radius: 8px;
    margin-bottom: 15px;

    .title {
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      height: 45px;
      color: #333;
      border-bottom: 1px solid #eee;
      margin-bottom: 10px;
    }
  }
}

.arr-fold-box {
  display: flex;
  align-items: center;
  color: #0da5e5;
  cursor: pointer;
  font-size: 14px;

  .push-left-5 {
    margin-left: 5px;
  }

  .hide_one {
    font-size: 14px;
  }
}

.process-table {
  background: white;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #eee;
    margin-bottom: 10px; // 添加表格之间的间距

    &:last-child {
      margin-bottom: 0; // 最后一个表格不需要底部间距
    }

    tr {
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }
    }

    td {
      padding: 12px 15px;
      font-size: 14px;
      line-height: 20px;

      &.label {
        width: 120px;
        color: #666;
        border-right: 1px solid #eee;
      }

      &.value {
        color: #333;
      }
    }
  }
}

.application-form {
  padding: 10px;

  .form-table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border: 1px solid #eee;
      &.title-row {
        background-color: #0da5e50d;
        color: #576077;

        td {
          padding: 10px 15px;
          font-size: 14px;
          height: 42px;
          color: rgb(87, 96, 119);
          font-weight: bolder;

          border-bottom: 1px solid #eee;
        }
      }

      &.value-row {
        td {
          padding: 12px 15px;
          font-size: 14px;
          height: 42px;
          border-bottom: 1px solid #eee;
        }
      }

      &:last-child {
        td {
          border-bottom: none;
        }
      }
    }
  }

  .notice {
    color: #ff0000;
    margin-left: 5px;
  }

  .upload-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 15px;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    font-size: 14px;
    cursor: pointer;

    .upload-icon {
      margin-right: 5px;
    }
  }
}
.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 15px;
  margin-bottom: 30px;

  .export-btn {
    width: 110px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00a0e9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px 0;
    font-size: 16px;
    cursor: pointer;

    .download-icon {
      margin-right: 8px;
    }
  }

  .return-btn {
    background-color: #fff;
    color: #333;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    line-height: 30px;
    cursor: pointer;
  }
}

.expanded {
  transform: rotate(180deg);
}

.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 15px 15px;
  margin-top: 10px;
  border-top: 1px solid #ccc;

  .copyright {
    text-align: center;
    color: #888;
    font-size: 14px;
    padding: 20px 0;
    border-top: 1px solid #eee;
  }
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;

  h3 {
    margin: 0;
    font-weight: 500;
    color: #333;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 20px;
    color: #999;
    cursor: pointer;

    &:hover {
      color: #666;
    }
  }
}

.modal-body {
  padding: 15px;

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }

    input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;

      &:focus {
        border-color: #00a0e9;
        outline: none;
      }
    }
  }
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px;
  border-top: 1px solid #eee;

  button {
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .cancel-btn {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    color: #333;

    &:hover {
      background-color: #e8e8e8;
    }
  }

  .save-btn {
    background-color: #00a0e9;
    border: none;
    color: white;

    &:hover {
      background-color: #0088cc;
    }
  }
}
</style>
