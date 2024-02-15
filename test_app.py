import streamlit as st
import streamlit.components.v1 as components

component_value = components.declare_component(
    "audio_recorder",
    url="http://localhost:3001",
)


def main():
    st.title("Audio Recorder")

    audio_data = component_value()

    if audio_data:
        st.audio(audio_data, format="audio/wav")


if __name__ == "__main__":
    main()
