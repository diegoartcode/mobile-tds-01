import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const HelpSupportView = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#FFF" />
                    
                    
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ajuda e Suporte</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>

                <TouchableOpacity style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como rastrear meu pedido?</Text>
                    <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Qual o prazo de entrega?</Text>
                    <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como solicitar reembolso?</Text>
                    <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>

                <View style={styles.contactSection}>
                    <Text style={styles.contactTitle}>Ainda precisa de ajuda?</Text>
                    <TouchableOpacity style={styles.contactButton}>
                        <Ionicons name="chatbubble-ellipses-sharp" size={20} color="#FFF" style={{ marginRight: 10,fontWeight:'bold' }}  />
                        <Ionicons name="camera-sharp" size={24} color="#FFF" />
                        <Ionicons name="airplane-sharp" size={24} color="#FFF"/>
                        <Text style={styles.contactButtonText}>Fale Conosco</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#2c2c2c',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    content: {
        padding: 20,
    },
    sectionTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    faqItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    faqQuestion: {
        color: '#FFF',
        fontSize: 16,
    },
    contactSection: {
        marginTop: 40,
        alignItems: 'center',
    },
    contactTitle: {
        color: '#AAA',
        marginBottom: 15,
    },
    contactButton: {
        flexDirection: 'row',
        backgroundColor: '#9370DB',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: 'center',
    },
    contactButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default HelpSupportView;
