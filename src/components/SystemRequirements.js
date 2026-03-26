import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const RequirementRow = ({ label, value }) => (
    <View style={reqStyles.row}>
        <Text style={reqStyles.label}>{label}</Text>
        <Text style={reqStyles.value}>{value}</Text>
    </View>
);

const SystemRequirements = () => (
    <View style={reqStyles.container}>
        <View style={reqStyles.header}>
            <Text style={reqStyles.title}>Requisitos de Sistema</Text>
            {/* O Switch para alternar entre Mínimo/Recomendado */}
            <Switch
                trackColor={{ false: "#767577", true: "#9370DB" }}
                thumbColor={"#f4f3f4"}
                value={true} // True para 'Recomendado' (lado direito na imagem)
                // Implementação real exigiria um useState e lógica de troca
            />
        </View>

        <View style={reqStyles.boxContainer}>
            <View style={reqStyles.reqBox}>
                <RequirementRow label="OS:" value="Windows 10" />
                <RequirementRow label="Processador:" value="Intel I7" />
                <RequirementRow label="Memória:" value="16 RAM" />
                <RequirementRow label="Placa de Vídeo:" value="RTX 3000" />
            </View>

            {/* Barras de progresso (Renderização simplificada) */}
            <View style={reqStyles.gaugeContainer}>
                {/* 16 GB RAM / 8 GB RAM */}
                <Text style={reqStyles.gaugeLabel}>16</Text>
                <View style={[reqStyles.gaugeBar, { width: '80%', backgroundColor: '#008080' }]} />
                <Text style={reqStyles.gaugeLabel}>08</Text>
                
                {/* Outras barras de requisitos (CPU/GPU) */}
                <Text style={reqStyles.gaugeLabel}>18</Text>
                <View style={[reqStyles.gaugeBar, { width: '90%', backgroundColor: '#FFA500' }]} />
                <Text style={reqStyles.gaugeLabel}>06</Text>
            </View>
        </View>
    </View>
);

const reqStyles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    boxContainer: {
        flexDirection: 'row',
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
    },
    reqBox: {
        flex: 2,
        paddingRight: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    label: {
        color: '#888',
        marginRight: 5,
        fontSize: 13,
        fontWeight: 'bold',
    },
    value: {
        color: '#FFF',
        fontSize: 13,
    },
    gaugeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    gaugeBar: {
        height: 6,
        borderRadius: 3,
        marginVertical: 4,
    },
    gaugeLabel: {
        color: '#FFF',
        fontSize: 10,
        alignSelf: 'flex-start',
    }
});

export default SystemRequirements;