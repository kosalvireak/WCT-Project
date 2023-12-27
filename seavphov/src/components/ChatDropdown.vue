<template>
  <div class="notification-ui_dd-header">
    <h5
      class="d-flex align-items-center justify-content-center fw-bold"
      style="height: 50px; border-bottom: 1px solid gray"
    >
      Your Messages
    </h5>
  </div>
  <div class="chat-ui_dd-content">
    <div class="chat-list">
      <div class="chat-list_img">
        <img src="https://i.imgur.com/w4Mp4ny.jpg" alt="user" />
      </div>
      <div class="chat-list_detail fw-bold text-black">
        <b>Richard Miles</b>
        <p class="font-weight-bold">
          How's going? <small class="text-gray">• 2 minutes ago</small>
        </p>
      </div>
      <div class="chat-list_feature-img">
        <img src="/img/bluedot.png" alt="Blue circle" />
      </div>
    </div>
    <div class="chat-list">
      <div class="chat-list_img">
        <img src="https://i.imgur.com/ltXdE4K.jpg" alt="user" />
      </div>
      <div class="chat-list_detail fw-bold text-black">
        <b>Brian Cumin</b>
        <p>
          Can you give me your Location?
          <small class="text-gray">• 1 day ago</small>
        </p>
      </div>
      <div class="chat-list_feature-img">
        <img src="/img/bluedot.png" alt="Blue circle" />
      </div>
    </div>
    <div class="chat-list">
      <div class="chat-list_img">
        <img src="https://i.imgur.com/CtAQDCP.jpg" alt="user" />
      </div>
      <div class="chat-list_detail">
        <b>Lance Bogrol</b>
        <p>Thank you so much! <small class="text-gray">• 1 day ago</small></p>
      </div>
      <div class="chat-list_feature-img">
        <div style="height: 20px; width: 20px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.cd__main {
  display: block !important;
}

.chat-ui a:after {
  display: none;
}

.chat-ui_dd-content {
  max-height: 500px;
  overflow: auto;
}

.chat-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 25px;
  border-bottom: 1px solid #ddd;
}

.chat-list--unread {
  position: relative;
}

.chat-list--unread:before {
  content: "";
  position: absolute;
  top: 0;
  left: -25px;
  height: calc(100% + 1px);
  border-left: 2px solid #29b6f6;
}

.chat-list_img img {
  height: 48px;
  width: 48px;
  border-radius: 50px;
  margin-right: 20px;
}

.chat-list_detail p {
  width: 250px;
  margin-bottom: 5px;
  line-height: 1.2;
}

.chat-list_feature-img img {
  height: 20px;
  width: 20px;
  border-radius: 5px;
  margin-top: 15px;
}
</style>