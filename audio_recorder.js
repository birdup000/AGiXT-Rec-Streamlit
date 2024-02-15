import { Streamlit, RenderData } from "streamlit-component-lib";

const audioRecorder = new Recorder({
  ondataavailable: function (chunks) {
    const blob = new Blob(chunks, { type: "audio/wav" });
    const reader = new FileReader();
    reader.onloadend = function () {
      const base64data = reader.result;
      Streamlit.setComponentValue({ audio_data: base64data });
    };
    reader.readAsDataURL(blob);
  },
});

Streamlit.setComponentReady();

Streamlit.registerPluginMessageCallback((message) => {
  if (message === "startRecording") {
    audioRecorder.start();
  } else if (message === "stopRecording") {
    audioRecorder.stop();
  }
});